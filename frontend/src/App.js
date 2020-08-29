import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";

import Index from "./components/App/index";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>
    </div>
  );
}

export default App;
