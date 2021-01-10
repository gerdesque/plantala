import React from 'react';
import { Button, Grid } from '@material-ui/core';

interface IShareProps {
  setPlantalaData?: any
  canvasRef: React.RefObject<HTMLCanvasElement>
}

const Share = ({ setPlantalaData, canvasRef }: IShareProps) => {

  return (
    <Grid container justify="center">
      <Button variant="contained" color="secondary"
        onClick={() => setPlantalaData(canvasRef.current?.toDataURL())}>Download</Button>
    </Grid>
  );
};

export default Share;
