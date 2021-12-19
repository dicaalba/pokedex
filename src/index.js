import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import App from './components/App';
import { Provider } from 'react-redux';
import { initializeStore } from './store/store';

const store = initializeStore();

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider >
  </BrowserRouter>,
  document.getElementById('root')
);