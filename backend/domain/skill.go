package domain

type Skill struct {
    ID   uint   `gorm:"primaryKey"`
    Name string `gorm:"unique;not null"`
}