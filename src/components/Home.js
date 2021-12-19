import React from 'react';
import { Heading, createStandaloneToast, Spinner } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from '@chakra-ui/layout';
import ReactPaginate from 'react-paginate';

import usePaginator from '../hooks/usePaginator'
import useFetchPokemonList from '../hooks/useFetchPokemonList'
import SearchBar from './SearchBar'
import Results from './general/Results';
import './general/paginate.css'

export default function Home() {
  const { result, error } = useFetchPokemonList();
  const toast = createStandaloneToast()
  const { handlePageClick, pageCount, currentItems } = usePaginator({ result });

  if (error) {
    return (
      toast({
        title: 'An error occurred.',
        description: 'Unable to fetch data',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    )
  }
  if (!result) {
    return <Spinner size='lg' />
  }

  return (
    <Box>
      <SearchBar />
      <Heading>Lista de pokemones</Heading>
      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        {currentItems
          ?.map((pokemon, index) => (
            <Results name={pokemon.name} key={index} />
          ))}
      </SimpleGrid>
      <ReactPaginate
        activeClassName="active"
        breakClassName="yd-page-item"
        breakLabel="..."
        breakLinkClassName="yd-page-link"
        containerClassName="yd-pagination"
        nextClassName="yd-page-item"
        nextLabel="Next"
        nextLinkClassName="yd-page-link"
        onPageChange={handlePageClick}
        pageClassName="yd-page-item"
        pageCount={pageCount}
        pageLinkClassName="yd-page-link"
        pageRangeDisplayed={2}
        previousClassName="yd-page-item"
        previousLabel="Previous"
        previousLinkClassName="yd-page-link"
        renderOnZeroPageCount={null}
      />
    </Box >
  );
}
