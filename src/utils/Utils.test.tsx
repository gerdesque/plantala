import {calculateImage, setImageValues} from './Utils';

describe('Utils "setImageValues"', () => {

  it('should set default image value', () => {
    const plant = {name:'Echter Muskatnussbaum',source:'Echter_Muskatnussbaum_Ausschnitt_Bunt.png', active: false};
    const index = 0;
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant, index);
    expect(amount).toEqual(8);
    expect(distance).toEqual(50);
    expect(rotation).toEqual(0);
    expect(step).toEqual(45);
    expect(scale).toEqual(1);
    expect(size).toEqual(100);
  });

  it('should set plant image values', () => {
    const plant = {
      name:'Echter Muskatnussbaum',
      source:'Echter_Muskatnussbaum_Ausschnitt_Bunt.png',
      active: false,
      amount: 4,
      order: 2,
      rotation: 90,
      scale: 0.25,
      size: 400
    };
    const index = 1;
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant, index);
    expect(amount).toEqual(4);
    expect(distance).toEqual(100);
    expect(rotation).toEqual(90);
    expect(step).toEqual(90);
    expect(scale).toEqual(0.25);
    expect(size).toEqual(400);
  });

  it('should set plant image values for 120 images', () => {
    const plant = {
      name:'Echter Muskatnussbaum',
      source:'Echter_Muskatnussbaum_Ausschnitt_Bunt.png',
      active: false,
      amount: 120,
    };
    const index = 0;
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant, index);
    expect(amount).toEqual(120);
    expect(distance).toEqual(50);
    expect(rotation).toEqual(0);
    expect(step).toEqual(3);
    expect(scale).toEqual(1);
    expect(size).toEqual(100);
  });


  it('should set plant image values for fifth layer', () => {
    const plant = {
      name:'Echter Muskatnussbaum',
      source:'Echter_Muskatnussbaum_Ausschnitt_Bunt.png',
      active: false,
    };
    const index = 4;
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant, index);
    expect(amount).toEqual(16);
    expect(distance).toEqual(250);
    expect(rotation).toEqual(0);
    expect(step).toEqual(23);
    expect(scale).toEqual(1);
    expect(size).toEqual(100);
  });

});

describe('Utils "calculateImage"', () => {

  it('should calculate image transform values', () => {
    const canvasWidth = 400;
    const canvasHeight = 400;
    const imageNumber = 0;
    const amount = 4;
    const distance = 50;
    const rotation = 0;
    const step = 90;
    const { imageX, imageY, imageRotation } = calculateImage(
      canvasWidth, canvasHeight, imageNumber, amount, distance, rotation, step);
    expect(imageX).toEqual(250);
    expect(imageY).toEqual(200);
    expect(imageRotation).toEqual(0);
  });
});