import React, {useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useCanvas } from './useCanvas';
import { IPlant } from '../plant/Plant';
import { AppContext } from '../app-plantala/Context';
import Share from './Share';

interface IMandalaProps {
  selectedPlants: IPlant[]
  isShareable?: boolean
}

const useStyles = makeStyles(() => ({
  canvas: {
    width: '100%',
    height: '100%'
  }
}));

const Mandala = ({ selectedPlants, isShareable = false }: IMandalaProps) => {
  const classes = useStyles();
  const { setPlants, canvasRef, canvasWidth, canvasHeight } = useCanvas();
  const [, imageMultiplier] = useContext(AppContext);

  useEffect(() => {
    setPlants(selectedPlants);
  }, [selectedPlants, setPlants]);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className={classes.canvas}
        width={canvasWidth * imageMultiplier}
        height={canvasHeight * imageMultiplier}
      />
      {isShareable && <Share canvasRef={canvasRef} />}
    </>
  );
};

export default Mandala;
