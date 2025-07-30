"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Container, Paper, TextField, Button, Typography, Box, Divider } from "@mui/material"
import Link from "next/link"
import axios from "axios"

export default function SignInPage() {

  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8888/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      router.push("/user/dashboard")
    } catch (error: any) {
      alert("ログインに失敗しました")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            p: 4,
          }}
        >
          <Box className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PeerMatch.AI
              </span>
            </Link>
            <Typography variant="h4" className="font-bold text-gray-800 mb-2">
              おかえりなさい
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              アカウントにサインインして続行してください
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              label="メールアドレス"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />

            <TextField
              fullWidth
              label="パスワード"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
                borderRadius: "12px",
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)",
                },
              }}
            >
              サインイン
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>または</Divider>

          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "12px",
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#E5E7EB",
              color: "#374151",
              "&:hover": {
                borderColor: "#D1D5DB",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            Googleでサインイン
          </Button>

          <Box className="text-center mt-6">
            <Typography variant="body2" className="text-gray-600">
              アカウントをお持ちでない方は{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                こちらから登録
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}
