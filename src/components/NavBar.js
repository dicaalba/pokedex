import React from 'react'
import { Link } from "react-router-dom";
import { Icon, Stack } from '@chakra-ui/react'
import { AiOutlineHome } from "react-icons/ai";

export default function NavBar() {
  return (
    <Stack direction='row' spacing={4} align='center'>
      <Link to="/"><Icon as={AiOutlineHome} />Home</Link>
      <Link to="MyTeam">My team</Link>
    </Stack>
  )
}
