"use client"

import { Container, Typography, Box, Button } from "@mui/material"
import Link from "next/link"

export default function CTA() {
  return (
    <Container maxWidth="lg" className="py-20">
      <Box className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          今すぐ始めよう
        </Typography>
        <Typography variant="h6" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center">
          あなたの学習パートナーが待っています。無料で登録して、新しい学習体験を始めましょう。
        </Typography>
        <Link href="/signup">
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
              borderRadius: "30px",
              px: 6,
              py: 2.5,
              fontSize: "1.2rem",
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
    </Container>
  )
}
