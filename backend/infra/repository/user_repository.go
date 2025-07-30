package repository

import (
	"peer-match-ai/domain"
	"gorm.io/gorm"
)

type UserRepository interface {
    FindByEmail(email string) (*domain.User, error)
    Create(user *domain.User, teachSkills []string, learnSkills []string, skills []string) error
    FindByID(id uint) (*domain.User, error) // 追加
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db: db}
}

// メールアドレスからユーザーを探す
func (r *userRepository) FindByEmail(email string) (*domain.User, error) {
	var user domain.User
	if err := r.db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) FindByID(id uint) (*domain.User, error) {
	var user domain.User
	err := r.db.
			Preload("TeachSkills").
			Preload("LearnSkills").
			Preload("Skills").
			First(&user, id).Error
	if err != nil {
			return nil, err
	}
	return &user, nil
}

func (r *userRepository) Create(user *domain.User, teachSkills []string, learnSkills []string, skills []string) error {
    var teachSkillObjs []domain.Skill
    for _, name := range teachSkills {
        var skill domain.Skill
        if err := r.db.Where("name = ?", name).First(&skill).Error; err != nil {
            skill = domain.Skill{Name: name}
            r.db.Create(&skill)
        }
        teachSkillObjs = append(teachSkillObjs, skill)
    }
    user.TeachSkills = teachSkillObjs

    var learnSkillObjs []domain.Skill
    for _, name := range learnSkills {
        var skill domain.Skill
        if err := r.db.Where("name = ?", name).First(&skill).Error; err != nil {
            skill = domain.Skill{Name: name}
            r.db.Create(&skill)
        }
        learnSkillObjs = append(learnSkillObjs, skill)
    }
    user.LearnSkills = learnSkillObjs

    var skillObjs []domain.Skill
    for _, name := range skills {
        var skill domain.Skill
        if err := r.db.Where("name = ?", name).First(&skill).Error; err != nil {
            skill = domain.Skill{Name: name}
            r.db.Create(&skill)
        }
        skillObjs = append(skillObjs, skill)
    }
    user.Skills = skillObjs

    return r.db.Create(user).Error
}
