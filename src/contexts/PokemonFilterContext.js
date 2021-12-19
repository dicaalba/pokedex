import React, { createContext } from "react";
import usePokemonFilter from "../hooks/usePokemonFilter";

const PokemonFilterContext = createContext();

function PokemonFilterProvider({
  children
}) {
  const {
    searchQuery,
    setSearchQuery,
  } = usePokemonFilter();
  return (
    <PokemonFilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PokemonFilterContext.Provider>
  );
}

export { PokemonFilterContext, PokemonFilterProvider };
