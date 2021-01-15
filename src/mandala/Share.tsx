import React from 'react';
import { Button, Grid } from '@material-ui/core';

interface IShareProps {
  setPlantalaData?: any
  canvasRef: React.RefObject<HTMLCanvasElement>
}

const Share = ({ setPlantalaData, canvasRef }: IShareProps) => {

  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Button variant="contained" color="secondary"
          onClick={() => setPlantalaData(canvasRef.current?.toDataURL())}>Download</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary"
          onClick={() => window.print()}>Drucken</Button>
      </Grid>
    </Grid>
  );
};

export default Share;
