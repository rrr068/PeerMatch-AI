"use client"

import type React from "react"
import { Typography, Box } from "@mui/material"
import Link from "next/link"


const NotFound = () => {
  return (
    <Box
      className="text-center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Link href="/" className="inline-flex items-center space-x-2 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">P</span>
        </div>
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PeerMatch.AI
        </span>
      </Link>
      <Box className="mt-6 mb-8">
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          ページが見つかりません
        </Typography>
        <Typography variant="h6" className="text-xl text-gray-600 mb-6 mx-auto leading-relaxed">
          お探しのページは存在しないか、移動された可能性があります。
        </Typography>
      </Box>
    </Box>
  )
}

export default NotFound