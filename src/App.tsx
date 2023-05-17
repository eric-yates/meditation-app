import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function App() {
  const theme = extendTheme({
    colors: {
      primaryButton: "#4F4F4F",
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    h2: {
      // you can also use responsive styles
      fontWeight: 'medium',
    },
    h3: {
      fontWeight: 'medium',
    },
  });

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
