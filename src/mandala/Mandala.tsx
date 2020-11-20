import React from 'react';
import { useCanvas } from './useCanvas';
import { IPlant } from '../plant/Plant';

interface IMandalaProps {
  selectedPlants: IPlant[],
}

const Mandala = ({ selectedPlants }: IMandalaProps) => {
  const { setPlants, canvasRef, canvasWidth, canvasHeight } = useCanvas();

  const addPlants = () => {
    setPlants(selectedPlants);
  };

  return (
    <canvas 
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      onClick={addPlants}
    />
  );
};

export default Mandala;