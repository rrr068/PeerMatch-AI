"use client"

import { Button, Typography, Box, Container } from "@mui/material"
import Link from "next/link"

export default function Hero() {
  return (
    <Container maxWidth="lg" className="pt-32 pb-20">
      <Box className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <span className="text-sm font-medium text-blue-700">AIが最適な学習パートナーを見つけます</span>
          </div>
        </div>

        <Typography
          variant="h1"
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight"
        >
          スキルで繋がる
          <br />
          学習コミュニティ
        </Typography>

        <Typography variant="h5" className="text-xl md:text-2xl text-gray-600 mb-12 mx-auto leading-relaxed">
          AIがあなたのスキルや意志を分析し、最適な学習仲間・開発仲間とマッチング。
          <br />
          一緒に成長できるパートナーを見つけましょう。
        </Typography>

        <Box className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 mb-16">
          <Link href="/signup">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
                borderRadius: "30px",
                px: 8,
                py: 3,
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 8px 32px rgba(79, 70, 229, 0.3)",
                "&:hover": {
                  background: "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 40px rgba(79, 70, 229, 0.4)",
                },
              }}
            >
              無料で始める
            </Button>
          </Link>
        </Box>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "0", label: "see you soon" },
            { number: "100+", label: "多様なスキル人材が多数" },
            { number: "2", label: "ヶ月後" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg">
              <Typography variant="h3" className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </Typography>
              <Typography variant="body1" className="text-gray-600 font-medium">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </Box>
    </Container>
  )
}
