import { useState } from "react";

function usePokemonFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  return {
    searchQuery,
    setSearchQuery,
  };
}

export default usePokemonFilter;
