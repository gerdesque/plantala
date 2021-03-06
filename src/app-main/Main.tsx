import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';
import Mandala from '../mandala/Mandala';
import Image from '../image/Image';
import { Action } from '../app-plantala/Plantala';

export enum ButtonValue {
  Start = "Start",
  Select = "Plantala erstellen",
  Done = "Fertig",
  Again = "Neues Plantala erstellen"
}

export enum HeaderValue {
  Start = "Erstelle dein Plantala!",
  Select = "Wähle 5 Karten",
  Done = "Gestalte dein Plantala",
  Again = "Zeige dein Plantala!"
}

interface IMainProps {
  plants: IPlant[]
  selectedPlants: IPlant[]
  action: Action
  setAction: any
  setSelectedPlant: any
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    paddingTop: theme.spacing(2),
  },
  main: {
    backgroundColor: theme.palette.primary.light,
    width: 'inherit'
  },
}));

export default function Main({ plants, selectedPlants, action, setAction, setSelectedPlant}: IMainProps) {
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
              <Button variant="contained" color="secondary" fullWidth onClick={setAction} disabled={action === Action.Select && selectedPlants.length === 0}>
                {ButtonValue[action]}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="sm">
        {action === Action.Start && <Landing /> }
        {action === Action.Select && <PlantList plants={plants} setSelectedPlant={setSelectedPlant} selectedPlants={selectedPlants} /> }
        {action === Action.Done && <Mandala selectedPlants={selectedPlants} /> }
        {action === Action.Again && <Image selectedPlants={selectedPlants} /> }
      </Container>
    </main>
  );
}
