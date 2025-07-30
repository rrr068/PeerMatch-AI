package router

import (
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "time"
    "peer-match-ai/handler"
    "peer-match-ai/middleware"
)

func SetupRouter(authHandler *handler.AuthHandler, userHandler *handler.UserHandler) *gin.Engine {
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
    auth.POST("/login", authHandler.Login)
    auth.POST("/signup", authHandler.SignUp)

    user := r.Group("/user")
    user.Use(middleware.JWTAuthMiddleware())
    user.GET("/userInfo", userHandler.GetUser)

    return r
}
