import React from 'react'
import { useDispatch } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/layout'
import { Icon, HStack, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { PokemonCard } from './PokemonCard'
import { removePokemonToTeam, editPokemonToTeam } from '../../actions/teams/actions'

export function PokemonTeam({ items, team }) {
  const dispatch = useDispatch();

  function removePokemon(pokemon, team) {
    dispatch(removePokemonToTeam(team, pokemon));
  }
  function updatePokemon(pokemon) {
    const team = 1;
    dispatch(editPokemonToTeam(team, pokemon));
  }

  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
      {items
        .map((pokemon, index) => {
          return (
            <HStack>
              <PokemonCard result={pokemon} name={pokemon.name} key={pokemon.id} id={index + 1} >
                <Button onClick={() => { removePokemon(pokemon, team) }}><Icon as={DeleteIcon} />Eliminar del team</Button>
              </PokemonCard>
            </HStack>
          )
        })}
    </SimpleGrid>
  )
}

export default PokemonTeam;