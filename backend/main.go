package main

import (
    "peer-match-ai/handler"
    "peer-match-ai/infra/repository"
    "peer-match-ai/router"
    "peer-match-ai/usecase"
    "peer-match-ai/domain"
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
)

func main() {
    db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
		if err != nil {
				panic(err)
		}
		db.AutoMigrate(&domain.User{})

    // Repository, Usecase, Handlerの初期化
    userRepo := repository.NewUserRepository(db)
    userUsecase := usecase.NewUsercase(userRepo)
    authHandler := &handler.AuthHandler{UserUsecase: userUsecase}

    r := router.SetupRouter(authHandler)
    r.Run(":8888")
}
