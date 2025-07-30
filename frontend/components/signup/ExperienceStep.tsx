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
    { value: "super_novice", label: "半年" },
    { value: "beginner", label: "1年以上" },
    { value: "intermediate", label: "2年以上" },
    { value: "advanced", label: "3年以上" },
    { value: "expert", label: "5年以上" },
  ]

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
        あなたの経験レベルを教えてください
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

        <TextField
          fullWidth
          label="現在の役職"
          name="currentPosition"
          value={formData.currentRole}
          onChange={handleChange}
          placeholder="例：フロントエンド、バックエンド、インフラ、フルスタック...etc"
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
