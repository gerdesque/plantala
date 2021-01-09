import React, {useContext, useState} from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PlantList.css';
import { IPlant } from '../plant/Plant';
import LazyCardMedia from './LazyCardMedia';
import Description from './Description';
import { avatarCount } from '../utils/Utils';
import { AppContext } from '../app-plantala/Context';

interface IPlantListProps {
  plants: IPlant[],
  setSelectedPlant: any,
  selectedPlants: IPlant[],
}

const useStyles = makeStyles((theme) => ({
  plant: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: theme.spacing(1),
    cursor: 'pointer'
  },
  selected: {
    borderColor: theme.palette.secondary.main,
  },
  plantHeader: {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.common.black,
    borderStyle: 'solid',
    borderWidth: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  plantMedia: {
    paddingTop: '100%',
  },
  plantAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -theme.spacing(6),
    marginLeft: -theme.spacing(6),
  },
  plantContent: {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.common.black,
    borderStyle: 'solid',
    borderWidth: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    hyphens: 'auto',
  },
}));

export default function PlantList({ plants, setSelectedPlant, selectedPlants }: IPlantListProps) {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [isMoving, setMoving] = useState(false);
  const isPlantListFull = selectedPlants.length === avatarCount;
  const colorMode = useContext(AppContext);
  const colorPath = colorMode ? '_Bunt' : '_SW';

  const [fadePlant, setFadingPlant] = useState({} as IPlant);
  function selectCard(plant: IPlant):void {
    if (plant.selected) {
      setSelectedPlant(plant);
    } else if (!isPlantListFull) {
      setFadingPlant(plant);
      setTimeout(function () {
        setFadingPlant(plant)
        setSelectedPlant(plant)
      }, 500);
    }
  }

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
          className={`${classes.plant} ${plant.selected ? classes.selected : ''}`}
          onClick={() => {
            if (!isMoving) {
              selectCard(plant)
            }
            }}>
          <CardHeader
            title={plant.name}
            className={classes.plantHeader}
          />
          <LazyCardMedia
            className={classes.plantMedia}
            image={require('../assets/' + plant.source + colorPath + '.png').default}
            title={plant.name}
          />
          {fadePlant === plant && <Avatar
            key={plant.name}
            alt={plant.name}
            src={require('../assets/' + plant.source + colorPath + '.png').default}
            className={`${classes.plantAvatar} ${fadePlant === plant ? 'fade' : ''}`}
          />}
          {plant.description && <CardContent className={classes.plantContent}>
            <Description description={plant.description} />
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
