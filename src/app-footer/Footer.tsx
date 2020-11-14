import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

interface IPlant {
  name: string,
  source: string
}

interface IFooterProps {
  selectedPlants: IPlant[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }),
);

export default function Footer({selectedPlants}: IFooterProps) {
  const classes = useStyles();
  const avatarCount = 5;
  const avatars = selectedPlants.slice(0, avatarCount).map(plant =>
    <Avatar
      key={plant.name}
      alt={plant.name}
      src={`${process.env.PUBLIC_URL}/${plant.source}`}
      className={classes.avatar} />);

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} justify="center">
        <AvatarGroup max={5}>
          {avatars}
        </AvatarGroup>
      </Grid>
    </footer>
  );
}
