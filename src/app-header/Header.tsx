import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.webp';

interface IHeaderProps {
  setStart: any
  isPlaying: boolean
  setSound: any
  setColorMode: any
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    marginRight: theme.spacing(2),
    height: theme.spacing(8),
    width: theme.spacing(8),
    cursor: 'pointer'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ setStart, isPlaying, setSound, setColorMode }: IHeaderProps) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          <img src={logo} className={classes.icon} alt="Plantala logo" onClick={() => setStart()} />
          <Typography variant="h2" className={classes.title}>
            Plantala
          </Typography>
          <IconButton aria-label="invert" onClick={() => setSound(isPlaying)}>
            {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
          </IconButton>
          <IconButton aria-label="invert" onClick={() => setColorMode()}>
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
