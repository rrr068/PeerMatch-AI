package handler

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"

	"peer-match-ai/domain"
	"peer-match-ai/utils"
	"peer-match-ai/usecase"
)

type AuthHandler struct {
	UserUsecase usecase.UserUsecase
}

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (h *AuthHandler) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Request"})
		return
	}

	user, err := h.UserUsecase.Login(req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	token, err := utils.GenerateJWT(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Token creation failed"})
		return
	}

	c.SetCookie("access_token", token, 3600*24*3, "/", "localhost", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "Logged in"})
}

func (h *AuthHandler) SignUp(c *gin.Context) {
	var req struct {
		Name            string   `json:"name"`
		Email           string   `json:"email"`
		Password        string   `json:"password"`
		ConfirmPassword string   `json:"confirmPassword"`
		CurrentPosition string   `json:"currentPosition"`
		ExperienceLevel string   `json:"experienceLevel"`
		Skills          []string `json:"skills"`
		Interests       []string `json:"interests"`
		TeachSkills     []string `json:"teachSkills"`
		LearnSkills     []string `json:"learnSkills"`
		IsTeacher       bool     `json:"isTeacher"`
		IsLearner       bool     `json:"isLearner"`
		AgreeToTerms    bool     `json:"agreeToTerms"`
		AgreeToPrivacy  bool     `json:"agreeToPrivacy"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Request"})
		return
	}

	if req.Password != req.ConfirmPassword {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Passwords do not match"})
		return
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Password hash failed"})
		return
	}

	user := domain.User{
		Name:            req.Name,
		Email:           req.Email,
		Password:        string(hashed),
		CurrentPosition: req.CurrentPosition,
		ExperienceLevel: req.ExperienceLevel,
		Interests:       strings.Join(req.Interests, ","),
	}

	if err := h.UserUsecase.CreateUser(&user, req.TeachSkills, req.LearnSkills); err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": "User creation failed"})
    return
	}

	c.JSON(http.StatusOK, gin.H{"message": "SignUp success"})
}
