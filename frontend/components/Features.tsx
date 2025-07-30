"use client"

import { Container, Typography, Box, Card, CardContent } from "@mui/material"

export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI マッチング",
      description: "高度なAIアルゴリズムがあなたのスキル、経験、学習目標を分析し、最適なパートナーを見つけます。",
    },
    {
      icon: "📊",
      title: "スキル評価",
      description: "詳細なスキル評価システムで、あなたの強みと成長ポイントを可視化します。",
    },
    {
      icon: "👥",
      title: "コミュニティ",
      description: "同じ目標を持つ仲間と繋がり、お互いに刺激し合いながら成長できます。",
    },
    {
      icon: "🎯",
      title: "目標設定",
      description: "明確な学習目標を設定し、進捗を追跡しながら効率的にスキルアップ。",
    },
    {
      icon: "💬",
      title: "リアルタイム交流",
      description: "チャット機能やビデオ通話で、いつでもパートナーと交流できます。",
    },
    {
      icon: "📈",
      title: "成長追跡",
      description: "学習の進捗や成果を詳細に追跡し、モチベーションを維持します。",
    },
  ]

  return (
    <Container maxWidth="lg" className="py-20">
      <Box className="text-center mb-16">
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          なぜPeerMatch.AIなのか
        </Typography>
        <Typography variant="h6" className="text-xl text-gray-600 max-w-2xl mx-auto">
          最新のAI技術と豊富な機能で、あなたの学習体験を革新します
        </Typography>
      </Box>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <Typography variant="h5" className="font-bold mb-4 text-gray-800">
                {feature.title}
              </Typography>
              <Typography variant="body1" className="text-gray-600 leading-relaxed">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
