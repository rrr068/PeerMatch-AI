package domain

import "time"

type Article struct {
    ID        uint      `gorm:"primaryKey"`
    UserID    uint
    Title     string    `gorm:"size:200"`
    Content   string    `gorm:"type:text"`
    CreatedAt time.Time
    UpdatedAt time.Time
}