"use client"

import type React from "react"

import { TextField, Button, Typography, Box } from "@mui/material"

interface BasicInfoStepProps {
  formData: any
  onFormDataChange: (data: any) => void
  onNext: () => void
}

export default function BasicInfoStep({ formData, onFormDataChange, onNext }: BasicInfoStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <Box>
      <Typography variant="h4" className="font-bold text-center mb-2 text-gray-800">
        基本情報を入力
      </Typography>
      <Typography variant="body1" className="text-center text-gray-600 mb-8">
        あなたの基本情報を教えてください
      </Typography>

      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          fullWidth
          label="お名前"
          name="name"
          value={formData.name}
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

        <TextField
          fullWidth
          label="パスワード確認"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
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
            mt: 4,
            "&:hover": {
              background: "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)",
            },
          }}
        >
          次へ
        </Button>
      </form>
    </Box>
  )
}
