import React, {useState} from 'react';
import { Button, Card, CardActions, CardMedia, CardContent, Typography, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PlantList.css';
import { IPlant } from '../plant/Plant';

interface IPlantListProps {
  plants: IPlant[],
  setSelectedPlant: any
}

const useStyles = makeStyles((theme) => ({
  plant: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: theme.spacing(2),
    cursor: 'pointer'
  },
  active: {
    borderColor: theme.palette.secondary.main,
  },
  plantHeader: {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.common.black,
    borderStyle: 'solid',
    borderWidth: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  plantMedia: {
    paddingTop: '100%',
  },
  plantContent: {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.common.black,
    borderStyle: 'solid',
    borderWidth: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export default function PlantList({ plants, setSelectedPlant }: IPlantListProps) {
  const classes = useStyles();
  const responsive = {
    all: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
    }
  };
  const [isMoving, setMoving] = useState(false);
  return (
      <Carousel
      itemClass="image-item"
      responsive={responsive}
      renderDotsOutside
      infinite={true}
      autoPlay={false}
      containerClass="carousel-container"
      customTransition="all .3s ease-in-out"
      transitionDuration={300}
      centerMode={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      beforeChange={() => setMoving(true) }
      afterChange={() => setMoving(false) }
    >
      {plants.map(plant => (
        <Card 
          key={plant.name}
          className={`${classes.plant} ${plant.active ? classes.active : ''}`}
          onClick={() => {
            if (!isMoving) {
              setSelectedPlant(plant)
            }
            }}>
          <CardHeader
            title={plant.name}
            className={classes.plantHeader}
          />
          <CardMedia
            className={classes.plantMedia}
            image={`${process.env.PUBLIC_URL}/assets/${plant.source}`}
            title={plant.name}
          />
          {plant.description && <CardContent className={classes.plantContent}>
            <Typography>
              {plant.description}
            </Typography>
          </CardContent>}
          <CardActions>
            <Button size="small" color="secondary">
              Mehr erfahren
            </Button>
          </CardActions>
        </Card>
      ))}
      </Carousel>
  );
}
