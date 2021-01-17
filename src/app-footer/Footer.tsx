import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { IPlant } from '../plant/Plant';
import Drawer from '../drawer/Drawer';
import { avatarCount } from '../utils/Utils';
import { AppContext } from '../app-plantala/Context';
import { Action } from '../app-plantala/Plantala';

interface IFooterProps {
  selectedPlants: IPlant[]
  activePlant: IPlant
  setActivePlant: any
  transformPlant: any
  action: Action
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
    },
    pointer: {
      cursor: 'pointer'
    }
  }),
);

export default function Footer({selectedPlants, activePlant, setActivePlant, transformPlant, action}: IFooterProps) {
  const classes = useStyles();
  const [colorMode] = useContext(AppContext);
  const colorPath = colorMode ? '_Bunt' : '_SW';
  const isMandala = action === Action.Done;
  const avatars = selectedPlants.slice(0, avatarCount).map(plant =>
    <Avatar
      key={plant.name}
      alt={plant.name}
      src={require('../assets/' + plant.source + colorPath + '.png').default}
      className={`${classes.avatar} ${isMandala ? classes.pointer : ''}`}
      onClick={() => setActivePlant(plant)}
    />);

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} justify="center">
        <AvatarGroup max={avatarCount}>
          {avatars}
        </AvatarGroup>
        {isMandala && activePlant && <Drawer
          activePlant={activePlant}
          setActivePlant={setActivePlant}
          transformPlant={transformPlant}
        />}
      </Grid>
    </footer>
  );
}
