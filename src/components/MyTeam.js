import React from 'react';
import { Box, Text } from '@chakra-ui/layout'
import PokemonTeam from './pokemon/PokemonTeam'
import useTeams from "../hooks/useTeams";

export default function MyTeam() {
  const {
    teamState
  } = useTeams();

  if (!teamState) {
    return null;
  }

  if (teamState) {
    return (
      < Box >
        {
          Object.values(teamState?.list).map((item, index) => (
            item?.length > 0 ?
              <Box>
                <Text mt={2} fontSize="xl" fontWeight="semibold" color='blue' lineHeight="short">Team N.º {index + 1} </Text>
                <PokemonTeam items={item} team={index + 1} />
              </Box> :
              <Box boxShadow='lg' p='6' rounded='md' bg='gray200'>
                <Text mt={2} fontSize="xl" fontWeight="semibold" color='red' lineHeight="short"> Agrega pokemones a tu team N.º {index + 1}  </Text>
              </Box>
          ))
        }
      </Box >
    )
  }
}
