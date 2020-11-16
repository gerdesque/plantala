import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';
import Landing from '../landing/Landing';
import { ButtonValue, HeaderValue } from '../app-plantala/Plantala';
import PlantList from '../plant-list/PlantList';

interface IMainProps {
  plants: IPlant[],
  displayedButtonValue: ButtonValue,
  displayedHeaderValue: HeaderValue
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(4),
  },
  main: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Main({ plants, displayedButtonValue, displayedHeaderValue }: IMainProps) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          {displayedHeaderValue}
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item md={3}>
              <Button variant="contained" color="secondary" fullWidth>
                {displayedButtonValue}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container className={classes.content} maxWidth="md">
        {displayedHeaderValue === HeaderValue.Start && <Landing /> }
        {displayedHeaderValue === HeaderValue.Select && <PlantList plants={plants} /> }
          {/* <Mandala /> */}
      </Container>
    </main>
  );
}