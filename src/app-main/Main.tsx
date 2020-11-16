import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';
import { Action } from '../app-plantala/Plantala';

export enum ButtonValue {
  Start = "Start",
  Select = "Zur Auswahl hinzufügen",
  Done = "Fertig",
  Again = "Neues Plantala erstellen"
}

export enum HeaderValue {
  Start = "Erstelle dein Mandala!",
  Select = "Wähle bis zu 5 Karten aus",
  Done = "Gestalte dein Plantala",
  Again = "Teile dein Plantala"
}

interface IMainProps {
  plants: IPlant[],
  action: Action,
  setAction: any
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

export default function Main({ plants, action, setAction }: IMainProps) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
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
      <Container className={classes.content} maxWidth="md">
        {action === Action.Start && <Landing /> }
        {action === Action.Select && <PlantList plants={plants} /> }
          {/* <Mandala /> */}
      </Container>
    </main>
  );
}
