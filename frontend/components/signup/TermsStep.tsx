"use client"

import type React from "react"
import { useRouter } from 'next/navigation'
import { Typography, Box, Button, FormControlLabel, Checkbox, Paper } from "@mui/material"
import axios from "axios"

interface TermsStepProps {
  formData: any
  onFormDataChange: (data: any) => void
  onBack: () => void
}

export default function TermsStep({ formData, onFormDataChange, onBack }: TermsStepProps) {
  const router = useRouter()
  const handleCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({
      [name]: event.target.checked,
    })
  }

  const handleSubmit = async () => {
    console.log(formData)
    try {
      // サインアップ
      await axios.post("http://localhost:8888/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      // サインアップ成功後に自動ログイン
      await axios.post("http://localhost:8888/auth/login", {
        email: formData.email,
        password: formData.password,
      }, {
        withCredentials: true,
      })
      router.push("/user/dashboard")
    } catch (error: any) {
      console.error("登録失敗:", error.response?.data || error.message)
      alert("登録に失敗しました。もう一度お試しください。")
    }
  }

  const canSubmit = formData.agreeToTerms && formData.agreeToPrivacy

  return (
    <Box>
      <Typography variant="h4" className="font-bold text-center mb-2 text-gray-800">
        利用規約とプライバシーポリシー
      </Typography>
      <Typography variant="body1" className="text-center text-gray-600 mb-8">
        最後に、利用規約とプライバシーポリシーに同意してください
      </Typography>

      <div className="space-y-6">
        <Paper
          sx={{
            p: 3,
            borderRadius: "12px",
            backgroundColor: "rgba(249, 250, 251, 0.8)",
            border: "1px solid #E5E7EB",
          }}
        >
          <Typography variant="h6" className="font-semibold mb-3 text-gray-800">
            利用規約
          </Typography>
          <Typography variant="body2" className="text-gray-600 leading-relaxed">
            PeerMatch.AIのサービスを利用するにあたり、以下の利用規約に同意していただく必要があります。
            本サービスは学習目的でのマッチングを提供し、ユーザー同士の健全な交流を促進します。
            不適切な利用や他のユーザーへの迷惑行為は禁止されています。
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 3,
            borderRadius: "12px",
            backgroundColor: "rgba(249, 250, 251, 0.8)",
            border: "1px solid #E5E7EB",
          }}
        >
          <Typography variant="h6" className="font-semibold mb-3 text-gray-800">
            プライバシーポリシー
          </Typography>
          <Typography variant="body2" className="text-gray-600 leading-relaxed">
            お客様の個人情報は適切に保護され、マッチング機能の向上とサービス提供のためにのみ使用されます。
            第三者への情報提供は、お客様の同意なしには行いません。
            詳細については、プライバシーポリシーをご確認ください。
          </Typography>
        </Paper>

        <div className="space-y-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange("agreeToTerms")}
                sx={{
                  color: "#4F46E5",
                  "&.Mui-checked": {
                    color: "#4F46E5",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" className="text-gray-700">
                利用規約に同意します
              </Typography>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToPrivacy}
                onChange={handleCheckboxChange("agreeToPrivacy")}
                sx={{
                  color: "#4F46E5",
                  "&.Mui-checked": {
                    color: "#4F46E5",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" className="text-gray-700">
                プライバシーポリシーに同意します
              </Typography>
            }
          />
        </div>

        <Box className="flex gap-4 pt-4">
          <Button
            onClick={onBack}
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "12px",
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#D1D5DB",
              color: "#374151",
              "&:hover": {
                borderColor: "#9CA3AF",
              },
            }}
          >
            戻る
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            disabled={!canSubmit}
            sx={{
              background: canSubmit ? "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)" : "#D1D5DB",
              borderRadius: "12px",
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              flex: 1,
              "&:hover": {
                background: canSubmit ? "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)" : "#D1D5DB",
              },
            }}
          >
            登録完了
          </Button>
        </Box>
      </div>
    </Box>
  )
}
