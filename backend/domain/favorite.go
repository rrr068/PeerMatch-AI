package domain

import "time"

type Favorite struct {
    ID          uint      `gorm:"primaryKey"`
    UserID      uint
    TargetUserID uint     // ユーザーのお気に入り
    ArticleID   uint      // 記事のお気に入り
    CreatedAt   time.Time
}