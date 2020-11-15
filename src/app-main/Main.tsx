import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';
import Landing from '../landing/Landing';
//import PlantList from '../plant-list/PlantList';

interface IMainProps {
  plants: IPlant[],
  storedNavigationValue: string
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  main: {
    paddingTop: theme.spacing(4),
  },
}));

export default function Main({ plants, storedNavigationValue }: IMainProps) {
  const classes = useStyles();

  return (
    <main>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          Erstelle dein Mandala!
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item md={3}>
              <Button variant="contained" color="primary" fullWidth>
                {storedNavigationValue}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container className={classes.main} maxWidth="md">
          <Landing />
          {/* <PlantList plants={plants} /> */}
          {/* <Mandala /> */}
      </Container>
    </main>
  );
}