import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png';
import './Header.css';

const Header: React.FunctionComponent = () => 
  <div className="app-header">
    <AppBar position="relative">
      <Toolbar>
        <img src={logo} className="app-logo" alt="Plantala logo" />
        <Typography variant="h6" color="inherit" noWrap>
          Plantala
        </Typography>
      </Toolbar>
    </AppBar>
  </div>

export default Header;
