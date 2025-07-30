package domain

import "time"

type Message struct {
    ID         uint      `gorm:"primaryKey"`
    FromUserID uint
    ToUserID   uint
    Content    string    `gorm:"type:text"`
    CreatedAt  time.Time
}