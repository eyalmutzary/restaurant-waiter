import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { theme, GlobalStyle } from "../shared/theme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { tablesReducer } from "../store/reducers";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const rootReducer = combineReducers({
  tables: tablesReducer,
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Router />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
