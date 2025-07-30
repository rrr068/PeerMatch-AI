package usecase

import (
	"errors"

	"peer-match-ai/domain"
	"peer-match-ai/infra/repository"
	"golang.org/x/crypto/bcrypt"
)

type UserUsecase interface {
    Login(email, password string) (*domain.User, error)
    CreateUser(user *domain.User, teachSkills []string, learnSkills []string) error
    FindByID(id uint) (*domain.User, error) // 追加
}

type userUsecase struct {
	userRepo repository.UserRepository
}

func NewUsercase(userRepo repository.UserRepository) UserUsecase {
	return &userUsecase{userRepo: userRepo}
}

func (u *userUsecase) CreateUser(user *domain.User, teachSkills []string, learnSkills []string) error {
  return u.userRepo.Create(user, teachSkills, learnSkills)
}

func (u *userUsecase) FindByID(id uint) (*domain.User, error) {
    return u.userRepo.FindByID(id)
}

// ログイン処理
func (u *userUsecase) Login(email, password string) (*domain.User, error) {
	user, err := u.userRepo.FindByEmail(email)
	if err != nil {
		return nil, errors.New("user not found")
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return nil, errors.New("invalid password")
	}

	return user, nil
}