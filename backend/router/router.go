package router

import (
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "time"
    "peer-match-ai/handler"
    "peer-match-ai/middleware"
)

func SetupRouter(handler *handler.AuthHandler) *gin.Engine {
    r := gin.Default()
		r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3456"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))
    auth := r.Group("/auth")
    auth.POST("/login", handler.Login)
    auth.POST("/signup", handler.SignUp)

    user := r.Group("/user")
    user.Use(middleware.JWTAuthMiddleware())
    user.GET("/me", handler.GetMe)

    return r
}
