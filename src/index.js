import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeState from './context/RecipeContext/state'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import theme from './themes/default'
import App from './App';

ReactDOM.render(
  <Router>
    <RecipeState>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </RecipeState>
  </Router>,
  document.getElementById('root')
);