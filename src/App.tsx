import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { theme } from './theme';
import Plantala from './app-plantala/Plantala';

const App = () =>  
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Plantala />
  </ThemeProvider>

export default App;