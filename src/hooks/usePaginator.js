import { useEffect, useContext, useState } from 'react';
import { PokemonFilterContext } from "../contexts/PokemonFilterContext";

export default function usePaginator({ result }) {
  const itemsPerPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const { searchQuery } = useContext(PokemonFilterContext);
  const resultsFiltered = result?.results
    .filter((pokemon) => (pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))) || []
  const lengthList = resultsFiltered.length
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % resultsFiltered.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const splitedList = lengthList > itemOffset ? resultsFiltered?.slice(itemOffset, endOffset) : resultsFiltered;
    setCurrentItems(splitedList);
    setPageCount(Math.ceil(resultsFiltered?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, lengthList]);

  return { handlePageClick, pageCount, currentItems }
}