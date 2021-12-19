import React from 'react'
import { useContext } from "react";
import { PokemonFilterContext } from "../contexts/PokemonFilterContext";
import { Box, Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default function SearchBar() {
  const {
    setSearchQuery,
  } = useContext(PokemonFilterContext);

  return (
    <Box boxShadow='lg' p='6' rounded='md' bg='gray200'>
      <Stack direction='row' spacing={4} align='center'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input type='tel' placeholder='Ingresa el nombre de tu pokemon' width="50%" size='xl' onChange={(event) => {
            setSearchQuery(event.target.value);
          }} />
        </InputGroup>
      </Stack>
    </Box>
  )
}
