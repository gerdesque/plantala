import {orderSelectedPlant, reorderSelectedPlant, calculateImageCoordinates, calculateImageRotation, getLayerDistance, setImageValues} from './Utils';

describe('Utils "orderSelectedPlant"', () => {

  it('order selected plant', () => {
    const plant = {name: 'Kardamom', source: 'A.png', selected: false, order: 0}
    const plantOrder = 1
    const orderedPlant = orderSelectedPlant(plant, plantOrder);
    expect(orderedPlant).toEqual({name: 'Kardamom', source: 'A.png', selected: true, order: 1});
  });

  it('order deselected plant', () => {
    const plant = {name: 'Kardamom', source: 'A.png', selected: true, order: 4}
    const plantOrder = 0
    const orderedPlant = orderSelectedPlant(plant, plantOrder);
    expect(orderedPlant).toEqual({name: 'Kardamom', source: 'A.png', selected: false, order: 0});
  });

});

describe('Utils "reorderSelectedPlants"', () => {

  it('reorder first selected plant', () => {
    const plant = {name: 'Kardamom', source: 'A.png', selected: true, order: 1}
    const isSelected = true
    const reorderedPlant = reorderSelectedPlant(plant, isSelected);
    expect(reorderedPlant).toEqual({name: 'Kardamom', source: 'A.png', selected: true, order: 1});
  });

  it('reorder second selected plant', () => {
    const plant = {name: 'Kardamom', source: 'A.png', selected: true, order: 2}
    const isSelected = true
    const reorderedPlant = reorderSelectedPlant(plant, isSelected);
    expect(reorderedPlant).toEqual({name: 'Kardamom', source: 'A.png', selected: true, order: 1});
  });

});

describe('Utils "setImageValues"', () => {

  it('should set default image value', () => {
    const plant = {name:'Echter Muskatnussbaum',source:'Echter_Muskatnussbaum_Ausschnitt_Bunt.png', selected: false, order: 1};
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant);
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
      selected: false,
      amount: 4,
      order: 2,
      rotation: 90,
      scale: 0.25,
      size: 400
    };
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant);
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
      selected: false,
      order: 1,
      amount: 120,
    };
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant);
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
      order: 5,
      selected: false,
    };
    const { amount, distance, rotation, step, scale, size } = setImageValues(plant);
    expect(amount).toEqual(16);
    expect(distance).toEqual(250);
    expect(rotation).toEqual(0);
    expect(step).toEqual(23);
    expect(scale).toEqual(1);
    expect(size).toEqual(100);
  });

});

describe('Utils "getLayerDistance"', () => {

  it('should calculate layer distance between first and second layer', () => {
    const order = 1;
    const distance = getLayerDistance(order);
    expect(distance).toEqual(50);
  });

  it('should calculate layer distance between second and third layer', () => {
    const order = 2;
    const distance = getLayerDistance(order);
    expect(distance).toEqual(100);
  });

  it('should calculate layer distance between third and fourth layer', () => {
    const order = 3;
    const distance = getLayerDistance(order);
    expect(distance).toEqual(150);
  });
  
  it('should calculate layer distance between fourth and fifth layer', () => {
    const order = 4;
    const distance = getLayerDistance(order);
    expect(distance).toEqual(200);
  });
});

describe('Utils "calculateImageCoordinates"', () => {

  it('should calculate image coordinates for first out of 4 images', () => {
    const imageNumber = 0;
    const amount = 4;
    const distance = 50;
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance);
    expect(imageX).toEqual(450);
    expect(imageY).toEqual(400);
  });

  it('should calculate image coordinates for second out of 4 images', () => {
    const imageNumber = 1;
    const amount = 4;
    const distance = 50;
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance);
    expect(imageX).toEqual(400);
    expect(imageY).toEqual(450);
  });

  it('should calculate image coordinates for third out of 4 images', () => {
    const imageNumber = 2;
    const amount = 4;
    const distance = 50;
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance);
    expect(imageX).toEqual(350);
    expect(imageY).toEqual(400);
  });

  it('should calculate image coordinates for fourth out of 4 images', () => {
    const imageNumber = 3;
    const amount = 4;
    const distance = 50;
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance);
    expect(imageX).toEqual(400);
    expect(imageY).toEqual(350);
  });
});

describe('Utils "calculateImageRotation"', () => {

  it('should calculate image rotation for first out of 4 images without additional rotation', () => {
    const imageNumber = 0;
    const rotation = 0;
    const step = 90;
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
    expect(imageRotation).toEqual(0);
  });

  it('should calculate image rotation for second out of 4 images without additional rotation', () => {
    const imageNumber = 1;
    const rotation = 0;
    const step = 90;
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
    expect(imageRotation).toEqual(Math.PI / 2);
  });

  it('should calculate image rotation for third out of 4 images without additional rotation', () => {
    const imageNumber = 2;
    const rotation = 0;
    const step = 90;
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
    expect(imageRotation).toEqual(Math.PI);
  });

  it('should calculate image rotation for fourth out of 4 images without additional rotation', () => {
    const imageNumber = 3;
    const rotation = 0;
    const step = 90;
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
    expect(imageRotation).toEqual(Math.PI * 1.5);
  });

  it('should calculate image rotation for single images with additional rotation', () => {
    const imageNumber = 0;
    const rotation = 45;
    const step = 90;
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
    expect(imageRotation).toEqual(45);
  });
});
