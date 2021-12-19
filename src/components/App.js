import { Container, Box } from '@chakra-ui/layout';
import React from 'react';
import { PokemonFilterProvider } from "../contexts/PokemonFilterContext";
import Header from "./Header";
import Layout from './Layout';

function App() {
  return (
    <Container maxW='container.3xl' centerContent>
      <Box >
        <Header />
        <PokemonFilterProvider>
          <Layout />
        </PokemonFilterProvider>
      </Box>
    </Container>
  );
}

export default App;
