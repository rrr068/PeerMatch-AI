"use client"

import { useState } from "react"
import { Container, Paper, Box } from "@mui/material"
import Link from "next/link"
import Stepper from "../../components/signup/Stepper"
import BasicInfoStep from "../../components/signup/BasicInfoStep"
import SkillsStep from "../../components/signup/SkillStep"
import ExperienceStep from "../../components/signup/ExperienceStep"
import TermsStep from "../../components/signup/TermsStep"

export default function SignUpPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentPosition: "",
    experienceLevel: "",
    skills: [] as string[],
    interests: [] as string[],
    teachSkills: [] as string[],
    learnSkills: [] as string[],
    isTeacher: false,
    isLearner: false,
    agreeToTerms: false,
    agreeToPrivacy: false,
  })

  const steps = ["基本情報", "スキル", "経験", "規約"]

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleFormDataChange = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }))
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BasicInfoStep formData={formData} onFormDataChange={handleFormDataChange} onNext={handleNext} />
      case 1:
        return (
          <SkillsStep
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 2:
        return (
          <ExperienceStep
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 3:
        return <TermsStep formData={formData} onFormDataChange={handleFormDataChange} onBack={handleBack} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <Container maxWidth="md">
        <Box className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PeerMatch.AI
            </span>
          </Link>
        </Box>

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
          <Stepper activeStep={activeStep} steps={steps} />
          <Box className="mt-8">{renderStepContent(activeStep)}</Box>
        </Paper>
      </Container>
    </div>
  )
}
