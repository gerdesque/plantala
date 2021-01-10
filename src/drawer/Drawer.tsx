import React, {useState, useEffect, useContext} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Grid, Box, Slider, SwipeableDrawer, Typography } from '@material-ui/core';
import { IPlant } from '../plant/Plant';
import { AppContext } from '../app-plantala/Context';

interface IDrawerProps {
  activePlant: IPlant,
  setActivePlant: any,
  transformPlant: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderWidth: '2px',
      cursor: 'pointer'
    },
    drawer: {
      padding: theme.spacing(4),
      width: 200,
    }
  }),
);

export default function Drawer({activePlant, setActivePlant, transformPlant}: IDrawerProps) {
  const classes = useStyles();
  const [colorMode] = useContext(AppContext);
  const colorPath = colorMode ? '_Bunt' : '_SW';
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(activePlant.active || false);
  }, [activePlant]);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
    setActivePlant(null);
  };

  const selectedPlant = (
    <Grid container justify="center" className={classes.drawer} role="presentation">
      <Box>
      <Avatar
        key={activePlant.name}
        alt={activePlant.name}
        src={require('../assets/' + activePlant.source + colorPath + '.png').default}
        className={classes.avatar}
      />
      <Typography id="rotation-slider" gutterBottom>
        Rotation
      </Typography>
      <Slider
        aria-labelledby="rotation-slider"
        valueLabelDisplay="auto"
        max={360}
        value={activePlant.rotation || 0}
        onChange={(_event, newValue) => { transformPlant(activePlant, 'rotation', newValue) }}
      />
      <Typography id="rotation-slider" gutterBottom>
        Menge
      </Typography>
      <Slider
        aria-labelledby="amount-slider"
        valueLabelDisplay="auto"
        min={4}
        max={20}
        value={activePlant.amount || 8}
        onChange={(_event, newValue) => { transformPlant(activePlant, 'amount', newValue) }}
      />
      <Typography id="rotation-slider" gutterBottom>
        Größe
      </Typography>
      <Slider
        aria-labelledby="scale-slider"
        valueLabelDisplay="auto"
        min={0.1}
        step={0.1}
        max={2}
        value={activePlant.scale || 1}
        onChange={(_event, newValue) => { transformPlant(activePlant, 'scale', newValue) }}
      />
      <Typography id="distance-slider" gutterBottom>
        Abstand
      </Typography>
      <Slider
        aria-labelledby="distance-slider"
        valueLabelDisplay="auto"
        min={50}
        max={300}
        value={activePlant.distance || 50}
        onChange={(_event, newValue) => { transformPlant(activePlant, 'distance', newValue) }}
      />
      </Box>
    </Grid>
    );

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {selectedPlant}
    </SwipeableDrawer>
  );
}
