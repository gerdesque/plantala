import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { IPlant } from '../plant/Plant';
import Drawer from '../drawer/Drawer';
import { avatarCount } from '../utils/Utils';

interface IFooterProps {
  selectedPlants: IPlant[],
  activePlant: IPlant,
  setActivePlant: any,
  transformPlant: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderColor: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  }),
);

export default function Footer({selectedPlants, activePlant, setActivePlant, transformPlant}: IFooterProps) {
  const classes = useStyles();
  const avatars = selectedPlants.slice(0, avatarCount).map(plant =>
    <Avatar
      key={plant.name}
      alt={plant.name}
      src={`${process.env.PUBLIC_URL}/assets/${plant.source}`}
      className={classes.avatar}
      onClick={() => setActivePlant(plant)}
    />);

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} justify="center">
        <AvatarGroup max={avatarCount}>
          {avatars}
        </AvatarGroup>
        {activePlant && <Drawer
          activePlant={activePlant}
          setActivePlant={setActivePlant}
          transformPlant={transformPlant}
        />}
      </Grid>
    </footer>
  );
}
