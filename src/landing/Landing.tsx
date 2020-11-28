import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../assets/logo.webp';
import './Landing.css';

export default function Landing() {
  return (
    <Grid className="app-landing-container" container justify="center">
      <img src={logo} className="app-landing" alt="Plantala" />
    </Grid>
  );
}
