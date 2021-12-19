import { ADD_POKEMON_TO_TEAM, REMOVE_POKEMON, EDIT_POKEMON, CHANGE_POKEMON_ORDER, CHANGE_TEAM_ORDER } from './types'
export const addPokemonToTeam = (teamID, pokemon) => {
  return {
    type: ADD_POKEMON_TO_TEAM,
    payload: {
      teamID,
      pokemon
    }
  }
}

export const removePokemonToTeam = (teamID, pokemon) => {
  return {
    type: REMOVE_POKEMON,
    payload: {
      teamID,
      pokemon
    }
  }
}

export const editPokemonToTeam = (teamID, pokemon) => {
  return {
    type: EDIT_POKEMON,
    payload: {
      teamID,
      pokemon
    }
  }
}

export const changeOrderPokemonToTeam = (teamID, now, next, pokemon) => {
  return {
    type: CHANGE_POKEMON_ORDER,
    payload: {
      now,
      next,
      teamID,
      pokemon
    }
  }
}

export const changeOrderToTeam = (teamID, now, next, pokemon) => {
  return {
    type: CHANGE_TEAM_ORDER,
    paylod: {
      now,
      next,
      teamID,
      pokemon
    }
  }
}
