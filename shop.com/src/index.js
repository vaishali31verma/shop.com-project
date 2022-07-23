import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Contextapiprovider from './context/contextapi';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <StrictMode>
      <ChakraProvider>
      <Contextapiprovider>
        <BrowserRouter>
      <App />
      </BrowserRouter>
    </Contextapiprovider>
    </ChakraProvider>
    </StrictMode>
);


