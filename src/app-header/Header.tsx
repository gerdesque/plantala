import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    height: theme.spacing(8),
    width: theme.spacing(8)
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className="app-header">
      <AppBar position="relative">
        <Toolbar>
          <img src={logo} className={classes.icon} alt="Plantala logo" />
          <Typography variant="h2">
            Plantala
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};