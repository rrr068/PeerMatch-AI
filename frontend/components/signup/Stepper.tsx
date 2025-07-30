"use client"

import { Box } from "@mui/material"

interface StepperComponentProps {
  activeStep: number
  steps: string[]
}

export default function Stepper({ activeStep, steps }: StepperComponentProps) {
  return (
    <Box className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                index <= activeStep
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                index <= activeStep ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-1 mx-4 rounded transition-colors duration-300 ${
                index < activeStep ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </Box>
  )
}
