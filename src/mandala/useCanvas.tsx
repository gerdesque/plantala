import { useState, useEffect, useRef, useContext } from 'react';
import { calculateImageCoordinates, calculateImageRotation, setImageValues, canvasHeight, canvasWidth } from '../utils/Utils';
import { IPlant } from '../plant/Plant';
import { AppContext } from '../app-plantala/Context';

/* istanbul ignore next */
function drawPlants (context:CanvasRenderingContext2D, plant:IPlant, colorPath: string, imageMultiplier: number) {

  const { amount, distance, rotation, step, scale, size } = setImageValues(plant, imageMultiplier);

  for (let imageNumber = 0; imageNumber < amount; imageNumber ++) {
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance, imageMultiplier);
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

    image.src = require('../assets/' + plant.source + colorPath + '.png').default;
  }
}

/* istanbul ignore next */
export function useCanvas(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [plants, setPlants] = useState([] as IPlant[]);
  const [colorMode, imageMultiplier] = useContext(AppContext);
  const colorPath = colorMode ? '_Bunt' : '_SW';

  useEffect(() => {
    if (plants.length > 0 && canvasRef.current) {
      const canvasObj = canvasRef.current;
      const context = canvasObj.getContext('2d');
      if (context) {
        context.setTransform(1,0,0,1,0,0);
        context.clearRect( 0,0, canvasWidth * imageMultiplier, canvasHeight * imageMultiplier );
        //drawCoordinateSystem(context);

        plants.forEach((plant) => {
          drawPlants(context, plant, colorPath, imageMultiplier);
        });

      }
    }
  }, [plants, colorPath, imageMultiplier]);

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

