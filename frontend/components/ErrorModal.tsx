"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Fade,
} from "@mui/material"
import Link from "next/link"

export interface ErrorModalProps {
  open: boolean
  onClose: () => void
  ErrorMessage?: string
}

export default function ErrorModal({ open = true, onClose, ErrorMessage }: Partial<ErrorModalProps> = {}) {
  const router = useRouter()

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      router.push('/')
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.98)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          minWidth: 600,
          maxWidth: 600,
          mx: 0,
          p: 0,
        },
      }}
      BackdropProps={{
        sx: { backgroundColor: 'rgba(0,0,0,0.15)' }
      }}
    >
      <DialogContent className="p-8 text-center">
        <Link href="/" className="inline-flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
        </Link>
        <Typography variant="body1" className="text-gray-700 mb-4 leading-relaxed">
          {ErrorMessage || "予期しないエラーが発生しました。"}
        </Typography>
      </DialogContent>
      <Box className="flex flex-col sm:flex-row gap-3 w-full" display="flex" justifyContent="center" pb={3}>
        <Button
          onClick={handleClose}
          variant="text"
          size="large"
          sx={{
            borderRadius: "12px",
            py: 1.5,
            px: 4,
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            color: "#6B7280",
            minWidth: "auto",
            backgroundColor: "rgba(100, 100, 94, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(78, 47, 214, 0.28)",
              color: "#374151",
            },
            transition: "all 0.2s ease",
          }}
        >
          Topに戻る
        </Button>
      </Box>
    </Dialog>
  )
}


