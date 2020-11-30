import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useCanvas } from './useCanvas';
import { IPlant } from '../plant/Plant';

interface IMandalaProps {
  selectedPlants: IPlant[],
  setPlantalaData: any
}

const useStyles = makeStyles(() => ({
  canvas: {
    width: '100%',
    height: 'auto'
  }
}));

const Mandala = ({ selectedPlants, setPlantalaData }: IMandalaProps) => {
  const classes = useStyles();
  const { setPlants, canvasRef, canvasWidth, canvasHeight } = useCanvas();

  useEffect(() => {
    setPlants(selectedPlants);
  }, [selectedPlants, setPlants]);

  return (
    <canvas 
      ref={canvasRef}
      className={classes.canvas}
      width={canvasWidth}
      height={canvasHeight}
      onClick={() => setPlantalaData(canvasRef.current?.toDataURL())}
    />
  );
};

export default Mandala;
