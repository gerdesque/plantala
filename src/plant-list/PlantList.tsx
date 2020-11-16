import React from 'react';
import { Button, Card, CardActions, CardMedia, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IPlant } from '../plant/Plant';

interface IPlantListProps {
  plants: IPlant[]
}

const useStyles = makeStyles((theme) => ({
  plant: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  plantMedia: {
    paddingTop: '100%',
  },
  plantContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function PlantList({ plants }: IPlantListProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center">
      {plants.map((plant) => (
        <Grid item key={plant.name} xs={12} sm={6} md={4}>
          <Card className={classes.plant}>
            <CardMedia
              className={classes.plantMedia}
              image={`${process.env.PUBLIC_URL}/assets/${plant.source}`}
              title={plant.name}
            />
            <CardContent className={classes.plantContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {plant.name}
              </Typography>
              <Typography>
                {plant.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Mehr erfahren
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
