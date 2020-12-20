import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.webp';

interface IHeaderProps {
  setColorMode: any
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    marginRight: theme.spacing(2),
    height: theme.spacing(8),
    width: theme.spacing(8)
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ setColorMode }: IHeaderProps) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          <img src={logo} className={classes.icon} alt="Plantala logo" />
          <Typography variant="h2" className={classes.title}>
            Plantala
          </Typography>
          <IconButton aria-label="delete" onClick={() => setColorMode()}>
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
