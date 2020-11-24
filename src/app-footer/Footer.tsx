import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid, Slider, Typography } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { IPlant } from '../plant/Plant';

interface IFooterProps {
  selectedPlants: IPlant[],
  setHighlightedPlant: any,
  setPlantTransform: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderColor: theme.palette.secondary.main,
      cursor: 'pointer'
    },
    plantValues: {
      width: 300,
      backgroundColor: theme.palette.secondary.main,
    },
    highlighted: {
      borderColor: theme.palette.secondary.light,
    }
  }),
);

export default function Footer({selectedPlants, setHighlightedPlant, setPlantTransform}: IFooterProps) {
  const classes = useStyles();
  const avatarCount = 5;
  const avatars = selectedPlants.slice(0, avatarCount).map(plant =>
    <Avatar
      key={plant.name}
      alt={plant.name}
      src={`${process.env.PUBLIC_URL}/assets/${plant.source}`}
      className={`${classes.avatar} ${plant.highlighted ? classes.highlighted : ''}`}
      onClick={() => { setHighlightedPlant(plant) }}
    />);
  const selectedPlant = (
    <Grid container spacing={2} justify="center" className={classes.plantValues}>
      <Typography id="rotation-slider" gutterBottom>
        Rotation
      </Typography>
      <Slider
        defaultValue={0}
        aria-labelledby="rotation-slider"
        valueLabelDisplay="auto"
        max={360}
        onChange={(_event, newValue) => { setPlantTransform('rotation', newValue) }}
      />
      <Typography id="rotation-slider" gutterBottom>
        Menge
      </Typography>
      <Slider
        defaultValue={8}
        aria-labelledby="amount-slider"
        valueLabelDisplay="auto"
        marks
        min={4}
        max={20}
        onChange={(_event, newValue) => { setPlantTransform('amount', newValue) }}
      />
      <Typography id="rotation-slider" gutterBottom>
        Größe
      </Typography>
      <Slider
        defaultValue={1}
        aria-labelledby="scale-slider"
        valueLabelDisplay="auto"
        marks
        min={0.1}
        step={0.1}
        max={2}
        onChange={(_event, newValue) => { setPlantTransform('scale', newValue) }}
      />
    </Grid>
      );

  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      {selectedPlant}
      <Grid container spacing={2} justify="center">
        <AvatarGroup max={5}>
          {avatars}
        </AvatarGroup>
      </Grid>
      </Grid>
    </footer>
  );
}
