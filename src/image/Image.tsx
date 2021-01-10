import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Mandala from '../mandala/Mandala';
import { IPlant } from '../plant/Plant';

interface IImageProps {
  selectedPlants: IPlant[]
  setPlantalaData: any
  plantalaData: string
}

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    height: 'auto'
  }
}));

export default function Image({ selectedPlants, setPlantalaData, plantalaData }: IImageProps) {
  const classes = useStyles();

  useEffect(() => {
    var link = document.getElementById('link');
    if (link) {
      link.setAttribute('download', 'plantala.png');
      link.setAttribute('href', plantalaData.replace("image/png", "image/octet-stream"));
      link.click();
    }
  }, [plantalaData]);

  
  return (
    <Grid container justify="center">
      {plantalaData
        ? <><img src={plantalaData} alt="Created Plantala" className={classes.image} /><a id="link"></a></>
        : <Mandala selectedPlants={selectedPlants} setPlantalaData={setPlantalaData} />
      }
    </Grid>
  );
}
