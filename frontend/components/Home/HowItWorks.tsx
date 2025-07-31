"use client"

import { Container, Typography, Box } from "@mui/material"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "プロフィール作成",
      description: "スキル、経験、学習目標を詳しく入力してプロフィールを作成します。",
    },
    {
      step: "02",
      title: "AI分析",
      description: "AIがあなたの情報を分析し、最適なマッチング候補を見つけます。",
    },
    {
      step: "03",
      title: "マッチング",
      description: "相性の良いパートナーとマッチングし、学習を開始します。",
    },
    {
      step: "04",
      title: "共同学習",
      description: "パートナーと一緒に目標に向かって学習し、お互いに成長します。",
    },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            簡単4ステップで始める
          </Typography>
          <Typography variant="h6" className="text-xl text-blue-100 mx-auto">
            数分で登録完了。すぐに最適なパートナーを見つけられます
          </Typography>
        </Box>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-blue-600">{step.step}</span>
              </div>
              <Typography variant="h5" className="font-bold mb-4 text-white">
                {step.title}
              </Typography>
              <Typography variant="body1" className="text-blue-100 leading-relaxed">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
