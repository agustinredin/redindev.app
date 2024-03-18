import React from 'react';
import {createRoot} from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './GlobalStyles.css'
import '@fontsource/geist-sans/700.css';

const theme = extendTheme({
  fonts: {
    heading: `'Geist Sans', sans-serif`,
    body: `'PP Neue', sans-serif`
  },
  colors: {
    primary: "#FF5800",
    secondary: "#007FFF",
    accent: "#67AEFA",
    white: "white",
    black: "#3A3B3A"
  },
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
})

import App from './App'
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);