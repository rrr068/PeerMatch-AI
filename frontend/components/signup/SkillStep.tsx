"use client"

import { useState } from "react"
import {
  Typography,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material"

interface SkillsStepProps {
  formData: any
  onFormDataChange: (data: any) => void
  onNext: () => void
  onBack: () => void
}

export default function SkillsStep({ formData, onFormDataChange, onNext, onBack }: SkillsStepProps) {
  const [selectedSkill, setSelectedSkill] = useState("")
  const [selectedInterest, setSelectedInterest] = useState("")

  const availableSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "HTML/CSS",
    "UI/UX Design",
    "Figma",
    "Photoshop",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "MongoDB",
    "PostgreSQL",
  ]

  const availableInterests = [
    "Web開発",
    "モバイル開発",
    "AI/機械学習",
    "データサイエンス",
    "DevOps",
    "クラウド",
    "セキュリティ",
    "ブロックチェーン",
    "ゲーム開発",
    "IoT",
    "AR/VR",
    "デザイン",
  ]

  const handleSkillAdd = (event: SelectChangeEvent) => {
    const skill = event.target.value
    if (skill && !formData.skills.includes(skill)) {
      onFormDataChange({
        skills: [...formData.skills, skill],
      })
    }
    setSelectedSkill("")
  }

  const handleInterestAdd = (event: SelectChangeEvent) => {
    const interest = event.target.value
    if (interest && !formData.interests.includes(interest)) {
      onFormDataChange({
        interests: [...formData.interests, interest],
      })
    }
    setSelectedInterest("")
  }

  const handleSkillRemove = (skillToRemove: string) => {
    onFormDataChange({
      skills: formData.skills.filter((skill: string) => skill !== skillToRemove),
    })
  }

  const handleInterestRemove = (interestToRemove: string) => {
    onFormDataChange({
      interests: formData.interests.filter((interest: string) => interest !== interestToRemove),
    })
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <Box>
      <Typography variant="h4" className="font-bold text-center mb-2 text-gray-800">
        スキルと興味を選択
      </Typography>
      <Typography variant="body1" className="text-center text-gray-600 mb-8">
        あなたのスキルと興味のある分野を教えてください
      </Typography>

      <div className="space-y-8">
        <div>
          <Typography variant="h6" className="font-semibold mb-4 text-gray-700">
            技術スキル
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>スキルを選択</InputLabel>
            <Select
              value={selectedSkill}
              label="スキルを選択"
              onChange={handleSkillAdd}
              sx={{
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              {availableSkills.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box className="flex flex-wrap gap-2">
            {formData.skills.map((skill: string) => (
              <Chip
                key={skill}
                label={skill}
                onDelete={() => handleSkillRemove(skill)}
                sx={{
                  background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
                  color: "white",
                  "& .MuiChip-deleteIcon": {
                    color: "white",
                  },
                }}
              />
            ))}
          </Box>
        </div>

        <div>
          <Typography variant="h6" className="font-semibold mb-4 text-gray-700">
            興味のある分野
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>分野を選択</InputLabel>
            <Select
              value={selectedInterest}
              label="分野を選択"
              onChange={handleInterestAdd}
              sx={{
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              {availableInterests.map((interest) => (
                <MenuItem key={interest} value={interest}>
                  {interest}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box className="flex flex-wrap gap-2">
            {formData.interests.map((interest: string) => (
              <Chip
                key={interest}
                label={interest}
                onDelete={() => handleInterestRemove(interest)}
                sx={{
                  background: "linear-gradient(45deg, #10B981 30%, #059669 90%)",
                  color: "white",
                  "& .MuiChip-deleteIcon": {
                    color: "white",
                  },
                }}
              />
            ))}
          </Box>
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
