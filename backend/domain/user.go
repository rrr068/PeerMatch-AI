package domain

import (
	"time"
)

type User struct {
	ID                uint      `gorm:"primaryKey"`
	Name              string    `gorm:"size:100;not null"`
	Email             string    `gorm:"unique;not null"`
	Password          string    `gorm:"not null"`
	CurrentPosition   string    `gorm:"size:100;not null"`
	ExperienceLevel   string    `gorm:"size:50"`
	Interests         string    `gorm:"type:text"`
		TeachSkills     []Skill   `gorm:"many2many:user_teach_skills"`
		LearnSkills     []Skill   `gorm:"many2many:user_learn_skills"`
		Skills 					[]Skill   `gorm:"many2many:user_skills"`
	CreatedAt         time.Time
	UpdatedAt         time.Time
}