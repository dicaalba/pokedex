import { ADD_POKEMON_TO_TEAM, REMOVE_POKEMON } from '../actions/teams/types';
import { MAX_POKEMOM_BY_TEAM } from '../constants'

const initState = {
  ids: [1, 2, 3],
  list: {
    1: [],
    2: [],
    3: []
  }
}

const list = (state = initState.list, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_TEAM:
      const teamID = action.payload.teamID;
      const pokemon = action.payload.pokemon;
      const pokemonID = pokemon.id;
      // Validar si existe el pokemon en el team
      const existPokemon = state[teamID].find((poke) => {
        return poke.id === pokemonID;
      })
      // Validar si hay cupo en el team
      const isCompleted = state[teamID].length > MAX_POKEMOM_BY_TEAM;
      // Ingreso el pokemon al team
      if (existPokemon || isCompleted) {
        return state;
      }
      return {
        ...state,
        [teamID]: [...state[teamID], pokemon]
      }
    case REMOVE_POKEMON:
      const teamID_RM = action.payload.teamID;
      const pokemon_RM = action.payload.pokemon;
      const pokemonID_RM = pokemon_RM.id;
      // Validar si existe el pokemon en el team
      const existPokemon_RM = state[teamID_RM].find((poke) => poke.id === pokemonID_RM)

      if (!existPokemon_RM) {
        return state;
      }
      const new_items = state[teamID_RM].filter(poke => poke.id !== pokemonID_RM)
      // ELimino el pokemon del team
      return {
        ...state,
        [teamID_RM]: new_items
      }
    default:
      break;
  }
  return state;
}

export const reducers = { list };