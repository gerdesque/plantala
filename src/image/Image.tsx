import React from 'react';
import { Grid } from '@material-ui/core';

interface IImageProps {
  plantalaData: string
}

export default function Image({ plantalaData }: IImageProps) {
  return (
    <Grid container justify="center">
      <img src={plantalaData} alt="Created Plantala" />
    </Grid>
  );
}
