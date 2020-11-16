import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../logo.webp';
import './Landing.css';

export default function Landing() {
  return (
    <Grid container justify="center">
      <img src={logo} className="app-landing" alt="Plantala" />
    </Grid>
  );
}
