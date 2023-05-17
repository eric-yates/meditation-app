import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        main: "#4F4F4F",
      },
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
