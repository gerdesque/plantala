import { useState, useEffect, useRef } from 'react';
import { IPlant } from '../plant/Plant';

const canvasWidth: number = 800; // TODO: Add window.innerWidth * .5
const canvasHeight: number = 800; // TODO: Add window.innerHeight * .5

function drawPlants (context:CanvasRenderingContext2D, plant:IPlant, index: number) {
  
  const imageAmount: number = 8; // TODO: Add plant.amount from 4 - 20
  const step: number = Math.ceil(360 / imageAmount);

  const imageScale: number = 0.25; // TODO: Add plant.scale from 0.1 - 2
  const imageSize: number = 400; // TODO: Add plant.size

  const layerScale: number = 100; // TODO: Add layer.scale in pixel from 50 - 300
  const imageOrder: number = layerScale * (index + 1); // TODO: Add plant.order

  const imageRotation: number = 0; // TODO: Add plant.rotation from 0 - 360

  for (let num = 0; num < imageAmount; num ++) {
    const angle = (num / (imageAmount / 2)) * Math.PI;
    const dx = (imageOrder * Math.cos(angle)) + (-imageSize * imageScale / 2);
    const dy = (imageOrder * Math.sin(angle)) + (-imageSize * imageScale / 2);

    // const iwM = imageSize * imageScale * 2 + canvasWidth;
    // const ihM = imageSize * imageScale * 2 + canvasHeight;
    // const xr = ((x % iwM) + iwM) % iwM - imageSize * imageScale;
    // const yr = ((y % ihM) + ihM) % ihM - imageSize * imageScale;
    const xr = dx + canvasWidth / 2;
    const yr = dy + canvasHeight / 2;
    const r = imageRotation + step * num * Math.PI / 180;
  
    const image = new Image();

    image.onload = () => {
      // context.translate(canvasWidth / 2, canvasHeight / 2 );
      // context.drawImage(image, dx, dy, imgX, imgY);

      console.log(`name: ${plant.name}, num: ${num}, angle: ${angle}, imageSize: ${imageSize}, imageScale: ${imageScale}, rotation: ${imageRotation + step * num}, dx: ${dx}, dy: ${dy}, xr: ${xr}, yr: ${yr}`);
      context.setTransform(imageScale, 0, 0, imageScale, xr, yr);
      context.rotate(r);
      context.drawImage(image, -imageSize/2, -imageSize/2, imageSize, imageSize);

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
        plants.forEach((plant, index) => {
          drawPlants(context, plant, index); 
        });

      }
    }
  });

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

