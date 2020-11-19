import React from 'react';
import { Button, Card, CardActions, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PlantList.css';
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
    }
  };
  return (
      <Carousel
      itemClass="image-item"
      responsive={responsive}
      renderDotsOutside
      infinite={true}
      autoPlay={false}
      containerClass="carousel-container"
      customTransition="all .3s linear"
      transitionDuration={300}
      centerMode={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {plants.map(plant => {
        return (
          <Card key={plant.name} className={classes.plant}>
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
        );
      })}
      </Carousel>
  );
}
