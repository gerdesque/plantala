import { IPlant } from '../plant/Plant';

export const canvasWidth: number = 800;
export const canvasHeight: number = 800;

export function setImageValues(plant: IPlant, index: number) {
  /* TODO
    Add plant.amount from 4 - 20
    Add plant.order
    Add plant.rotation from 0 - 360
    Add plant.scale from 0.1 - 2
    Add plant.size
  */
  const { 
    amount = 8 + (index * 2),
    order = (index + 1),
    rotation = 0,
    scale = 1,
    size = 100,
  } = plant;

  const distance: number = getLayerDistance(order);
  const step: number = Math.ceil(360 / amount);

  return { amount, distance, rotation, step, scale, size };
}
  
export function getLayerDistance(order:number) {
  //TODO: Add layer.scale in pixel from 50 - 300
  return 50 * order;
}

export function calculateImageCoordinates(imageNumber: number, amount: number, distance: number) {
  const angle = (imageNumber / (amount / 2)) * Math.PI;
  const imageX = distance * Math.cos(angle) + canvasWidth / 2;
  const imageY = distance * Math.sin(angle) + canvasHeight / 2;

  return { imageX, imageY };
}

export function calculateImageRotation(imageNumber: number, rotation: number, step: number) {
  const imageRotation = rotation + step * imageNumber * Math.PI / 180;

  return { imageRotation };
}

/* istanbul ignore next */
export function drawCoordinateSystem (context:CanvasRenderingContext2D) {
  for (var x = 0.5; x < canvasWidth; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, canvasWidth);
  }
  for (var y = 0.5; y < canvasHeight; y += 10) {
    context.moveTo(0, y);
    context.lineTo(canvasHeight, y);
  }
  context.strokeStyle = "#eee";
  context.stroke();

  context.beginPath();
  context.moveTo(0, canvasHeight/2);
  context.lineTo(canvasWidth, canvasHeight/2);
  context.moveTo(canvasWidth/2, 0);
  context.lineTo(canvasWidth/2, canvasHeight);
  context.strokeStyle = "#000";
  context.stroke();
}
