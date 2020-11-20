import { useState, useEffect, useRef } from 'react';
import { IPlant } from '../plant/Plant';

const canvasWidth: number = window.innerWidth * .9;
const canvasHeight: number = window.innerHeight * .65;
const radius: number = 100;

function drawPlants (context:CanvasRenderingContext2D, plant:IPlant, index: number) {
  
  const imageAmount = 10; // TODO: Add plant.amount
  const imageOrder = radius * (index / 2 + 1); // TODO: Add plant.order
  //const imageRotation = 40; // TODO: Add plant.rotation
  // const imageScale = 1; // TODO: Add plant.scale

  for (let num = 0; num < imageAmount; num ++) {
    const angle = (num / (imageAmount / 2)) * Math.PI;
    const width = radius + 500;
    const imgX = radius;
    const imgY = radius;
    const dx = (imageOrder * Math.cos(angle)) + (width / 2);
    const dy = (imageOrder * Math.sin(angle)) + (width / 2);
    //context.setTransform(spr.scale, 0, 0, spr.scale, spr.xr, spr.yr); //TODO: Add image scaling
    //context.rotate(imageRotation*Math.PI/180); //TODO: Add image rotating
    const image = new Image();

    image.onload = () => {
      context.drawImage(image, dx, dy, imgX, imgY)
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
        plants.forEach((plant, index) => {
          drawPlants(context, plant, index); 
        });

      }
    }
  });

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

