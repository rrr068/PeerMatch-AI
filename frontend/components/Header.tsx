"use client"

import { AppBar, Toolbar, Button, Box } from "@mui/material"
import Link from "next/link"

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Toolbar className="max-w-7xl mx-auto w-full">
        <Box className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PeerMatch.AI
          </span>
        </Box>

        <Box className="ml-auto flex items-center space-x-4">
          <Link href="/signin">
            <Button
              variant="text"
              sx={{
                color: "#4F46E5",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(79, 70, 229, 0.1)",
                },
              }}
            >
              サインイン
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #4F46E5 30%, #7C3AED 90%)",
                borderRadius: "25px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  background: "linear-gradient(45deg, #4338CA 30%, #6D28D9 90%)",
                },
              }}
            >
              無料で始める
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
