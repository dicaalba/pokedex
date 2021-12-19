import React from 'react';
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

export function PokemonCard({ name, result, children }) {

  return (
    <Box boxShadow='lg' p='6' rounded='md' bg='gray200'>
      <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">N.º {result.id} - {name}</Text>
      <SimpleGrid columns={[1, null, 2]} spacing={5}>
        <Box>
          <Image borderRadius="md" src={result.sprites?.front_default} width="100 px" height="100 px" />
          <Text mt={2} fontSize="sm" fontWeight="semibold" color='black' lineHeight="short">Tipo:
            <SimpleGrid columns={[1, null, 3]} spacing={5}>
              {result.types.map((poke, index) =>
                <Box bg='green' color='white' rounded='md' key={index}>
                  {poke.type.name}
                </Box>
              )}
            </SimpleGrid>
          </Text>
          <Text mt={2} fontSize="sm" fontWeight="semibold" color='black' lineHeight="short">Habilidades:
            <SimpleGrid columns={[1, null, 3]} spacing={5}>
              {result.abilities.map((poke, index) =>
                <Box bg='blue' color='white' rounded='md' key={index} >
                  {poke.ability.name}
                </Box>
              )}
            </SimpleGrid>
          </Text>
        </Box>
        <Box>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Vida: {result.stats[0].base_stat}
          </Text>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Ataque: {result.stats[1].base_stat}
          </Text>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Defensa: {result.stats[2].base_stat}
          </Text>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Ataque especial: {result.stats[3].base_stat}
          </Text>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Defensa especial: {result.stats[4].base_stat}
          </Text>
          <Text mt={2} fontSize="xl" fontWeight="semibold" color='black' lineHeight="short">
            Velocidad: {result.stats[5].base_stat}
          </Text>
        </Box>
      </SimpleGrid>
      {children}
    </Box>
  );
}
