import React from 'react'
import { useDispatch } from 'react-redux';
import { Select } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

import useFetchPokemonList from '../../hooks/useFetchPokemonList';
import { PokemonCard } from "../pokemon/PokemonCard";
import { addPokemonToTeam } from '../../actions/teams/actions';

export default function Results({ name = '' }) {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = React.useState(name);
  const { result, error } = useFetchPokemonList(name);
  if (error) return null;
  if (!result) return null;

  function handleClick(event) {
    const value = event.target.value;
    if (value !== '') {
      setPokemon(result);
      dispatch(addPokemonToTeam(event.target.value, result));
      event.target.value = '';
    }
  }

  return (
    <PokemonCard result={result} name={name}>
      <Select icon={<AddIcon />} placeholder='Seleccione equipo a agregar' onChange={handleClick}>
        <option value='1'>Equipo 1</option>
        <option value='2'>Equipo 2</option>
        <option value='3'>Equipo 3</option>
      </Select>
    </PokemonCard>
  )
}
