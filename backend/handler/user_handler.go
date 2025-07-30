package handler

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"peer-match-ai/utils"
	"peer-match-ai/usecase"
)

type UserHandler struct {
	UserUsecase usecase.UserUsecase
}

func (h *UserHandler) GetUser(c *gin.Context) {
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
	c.JSON(http.StatusOK, user)
}