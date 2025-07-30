"use client"

import { Container, Typography, Box } from "@mui/material"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Box className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-xl font-bold">PeerMatch.AI</span>
          </Box>
          <Typography variant="body2" className="text-gray-400">
            © 2024 PeerMatch.AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}
