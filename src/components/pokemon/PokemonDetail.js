import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
import zfill from '../../utils'

export default function PokemonDetail({ detail }) {
  const pokeID = 2;
  const urlImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zfill(pokeID)}.png`
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={urlImg} width="50 px" height="50 px" />
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">N.º {pokeID}</Text>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">Tipo: </Text>
    </Box>
  )
}
