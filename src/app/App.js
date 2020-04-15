import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { theme, GlobalStyle } from "../shared/theme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
