import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <Box boxShadow='lg' p='6' rounded='md' bg='gray300'>
      <NavBar />
    </Box>
  )
}
