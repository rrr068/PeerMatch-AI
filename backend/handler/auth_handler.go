package handler

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"peer-match-ai/utils"
	"peer-match-ai/usecase"
	"peer-match-ai/domain"
	"golang.org/x/crypto/bcrypt"
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
	var req domain.User
	if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Request"})
			return
	}

	// パスワードのハッシュ化
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Password hash failed"})
			return
	}
	req.Password = string(hashed)

	// ユーザー保存
	if err := h.UserUsecase.CreateUser(&req); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "User creation failed"})
			return
	}

	c.JSON(http.StatusOK, gin.H{"message": "SignUp success"})
}

func (h *AuthHandler) GetMe(c *gin.Context) {
    token, err := c.Cookie("access_token")
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "No token"})
        return
    }
    userID, err := utils.ValidateJWT(token)
    if err != nil || userID == 0 {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
        return
    }
    user, err := h.UserUsecase.FindByID(userID)
    if err != nil || user == nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
        return
    }
    // パスワードは返さない
    resp := gin.H{
        "id": user.ID,
        "name": user.Name,
        "email": user.Email,
        "createdAt": user.CreatedAt,
        "updatedAt": user.UpdatedAt,
    }
    c.JSON(http.StatusOK, resp)
}
