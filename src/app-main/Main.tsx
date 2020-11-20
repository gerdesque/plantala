import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';
import Mandala from '../mandala/Mandala';
import { Action } from '../app-plantala/Plantala';

export enum ButtonValue {
  Start = "Start",
  Select = "Zur Auswahl hinzufügen",
  Done = "Fertig",
  Again = "Neues Plantala erstellen"
}

export enum HeaderValue {
  Start = "Erstelle dein Mandala!",
  Select = "Wähle 5 Karten",
  Done = "Gestalte dein Plantala",
  Again = "Teile dein Plantala"
}

interface IMainProps {
  plants: IPlant[],
  selectedPlants: IPlant[],
  action: Action,
  setAction: any,
  setSelectedPlant: any
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  main: {
    backgroundColor: theme.palette.primary.light,
    width: 'inherit'
  },
}));

export default function Main({ plants, selectedPlants, action, setAction, setSelectedPlant }: IMainProps) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
          {HeaderValue[action]}
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item md={3}>
              <Button variant="contained" color="secondary" fullWidth onClick={setAction}>
                {ButtonValue[action]}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md">
        {action === Action.Start && <Landing /> }
        {action === Action.Select && <PlantList plants={plants} setSelectedPlant={setSelectedPlant} /> }
        {action === Action.Done && <Mandala selectedPlants={selectedPlants} /> }
          {/* <Mandala /> */}
      </Container>
    </main>
  );
}
