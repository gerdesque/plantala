import React from 'react';
import { Grid } from '@material-ui/core';
import Mandala from '../mandala/Mandala';
import { IPlant } from '../plant/Plant';

interface IImageProps {
  selectedPlants: IPlant[]
}

export default function Image({ selectedPlants }: IImageProps) {
  
  return (
    <Grid container justify="center">
      <Mandala selectedPlants={selectedPlants} isShareable={true} />
    </Grid>
  );
}
