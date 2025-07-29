package middleware

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"peer-match-ai/utils"
)

func JWTAuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token, err := c.Cookie("access_token")
        if err != nil {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
            return
        }

        userID, err := utils.ValidateJWT(token)
        if err != nil {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
            return
        }

        c.Set("userID", userID)
        c.Next()
    }
}
