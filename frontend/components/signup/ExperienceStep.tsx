"use client"

import type React from "react"

import {
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  type SelectChangeEvent,
} from "@mui/material"

interface ExperienceStepProps {
  formData: any
  onFormDataChange: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export default function ExperienceStep({ formData, onFormDataChange, onNext, onBack }: ExperienceStepProps) {
  const experienceLevels = [
    { value: "beginner", label: "初心者（0-1年）" },
    { value: "intermediate", label: "中級者（2-4年）" },
    { value: "advanced", label: "上級者（5年以上）" },
    { value: "expert", label: "エキスパート（10年以上）" },
  ]

  const yearsOptions = ["0年", "1年", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年以上"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string) => (event: SelectChangeEvent) => {
    onFormDataChange({
      [name]: event.target.value,
    })
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <Box>
      <Typography variant="h4" className="font-bold text-center mb-2 text-gray-800">
        経験について教えてください
      </Typography>
      <Typography variant="body1" className="text-center text-gray-600 mb-8">
        あなたの経験レベルと背景を教えてください
      </Typography>

      <div className="space-y-6">
        <FormControl fullWidth>
          <InputLabel>経験レベル</InputLabel>
          <Select
            value={formData.experienceLevel}
            label="経験レベル"
            onChange={handleSelectChange("experienceLevel")}
            sx={{
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {experienceLevels.map((level) => (
              <MenuItem key={level.value} value={level.value}>
                {level.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>プログラミング経験年数</InputLabel>
          <Select
            value={formData.yearsOfExperience}
            label="プログラミング経験年数"
            onChange={handleSelectChange("yearsOfExperience")}
            sx={{
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {yearsOptions.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="現在の職業・役職"
          name="currentRole"
          value={formData.currentRole}
          onChange={handleChange}
          placeholder="例：フロントエンドエンジニア、学生、転職活動中など"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
        />

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
            onClick={handleNext}
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
              borderRadius: "12px",
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              flex: 1,
              "&:hover": {
                background: "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)",
              },
            }}
          >
            次へ
          </Button>
        </Box>
      </div>
    </Box>
  )
}
