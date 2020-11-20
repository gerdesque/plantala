import { useState, useEffect, useRef } from 'react';
import { IPlant } from '../plant/Plant';

const canvasWidth: number = window.innerWidth * .9;
const canvasHeight: number = window.innerHeight * .5;

export function useCanvas(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [plants, setPlants] = useState([] as IPlant[]);

  useEffect(()=>{
    if (canvasRef.current) {
      const canvasObj = canvasRef.current;
      const context = canvasObj.getContext('2d');
      if (context) {
        context.clearRect( 0,0, canvasWidth, canvasHeight );

        plants.forEach((plant)=>{
          const image = new Image();

          image.onload = () => {
            context.drawImage(image, 0, 0, 100, 100)
          }

          image.src = `${process.env.PUBLIC_URL}/assets/${plant.source}`;
        });

      }
    }
  });

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

