import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from './theme';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <App />
      </AppContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


