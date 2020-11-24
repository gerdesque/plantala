import { useState, useEffect, useRef } from 'react';
import { calculateImageCoordinates, calculateImageRotation, setImageValues, canvasHeight, canvasWidth } from '../utils/Utils';
import { IPlant } from '../plant/Plant';



function drawPlants (context:CanvasRenderingContext2D, plant:IPlant, index: number) {

  const { amount, distance, rotation, step, scale, size } = setImageValues(plant, index);

  for (let imageNumber = 0; imageNumber < amount; imageNumber ++) {
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance);
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
  
    const image = new Image();

    image.onload = () => {
      //console.log(`name: ${plant.name}, imageNumber: ${imageNumber}, size: ${size}, scale: ${scale}, rotation: ${rotation}, imageX: ${imageX}, imageY: ${imageY}`);
      context.setTransform(scale, 0, 0, scale, imageX, imageY);
      context.rotate(imageRotation);
      context.drawImage(image, -size / 2, -size / 2, size, size);

      // context.lineWidth = 2;
      // context.strokeRect(-size / 2, -size / 2, size, size);
    }

    image.src = `${process.env.PUBLIC_URL}/assets/${plant.source}`;
  }
}

export function useCanvas(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [plants, setPlants] = useState([] as IPlant[]);

  useEffect(()=>{
    if (canvasRef.current) {
      const canvasObj = canvasRef.current;
      const context = canvasObj.getContext('2d');
      if (context) {
        context.clearRect( 0,0, canvasWidth, canvasHeight );
        context.setTransform(1,0,0,1,0,0);

        //drawCoordinateSystem(context);

        // TODO: use plant.order instead of index
        plants.forEach((plant, index) => {
          drawPlants(context, plant, index); 
        });

      }
    }
  });

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

