import React from 'react';
import {createShallow } from '@material-ui/core/test-utils';
import PlantList from './PlantList';
import { Card } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import { IPlant } from '../plant/Plant';

describe('PlantList', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<PlantList
      plants={[]}
      setSelectedPlant={jest.fn()}
    />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <Carousel /> container', () => {
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });

  it('should render no <Card /> component', () => {
    expect(wrapper.find(Card)).toHaveLength(0);
  });

  it('should render 3 <Card /> components', () => {
    const plants = [
      {name: 'Lathraea squamaria', source: '1.png', description: 'Lehrtafel von Carl von Tubeuf', active: false},
      {name: 'Oedogonium diplandrum Juranyi', source: '2.png', active: false},
      {name: 'Nicotiana Tabacum L.', source: '3.png', active: false}
    ]
    wrapper = shallow(<PlantList
      plants={plants}
      setSelectedPlant={jest.fn()}
    />);
    expect(wrapper.find(Card)).toHaveLength(plants.length);
  });
  
  it('should mark 2 <Card /> components as active', () => {
    const plants = [
      {name: 'Lathraea squamaria', source: '1.png', active: false},
      {name: 'Oedogonium diplandrum Juranyi', source: '2.png', active: true},
      {name: 'Nicotiana Tabacum L.', source: '3.png', active: true}
    ]
    wrapper = shallow(<PlantList
      plants={plants}
      setSelectedPlant={jest.fn()}
    />);
    expect(wrapper.find(Card).first().hasClass('makeStyles-active-2')).toEqual(false);
    expect(wrapper.find(Card).at(1).hasClass('makeStyles-active-2')).toEqual(true);
    expect(wrapper.find(Card).last().hasClass('makeStyles-active-2')).toEqual(true);
  });

  it('should trigger setSelectedPlant when <Card /> component is clicked', () => {
    const plants = [
      {name: 'Lathraea squamaria', source: '1.png', active: false}
    ]
    const setSelectedPlant = jest.fn();
    wrapper = shallow(<PlantList
      plants={plants}
      setSelectedPlant={setSelectedPlant}
    />);

   const handleClick = jest.spyOn(React, "useState");
   handleClick.mockImplementation(plant => [plant, setSelectedPlant]);

   wrapper.find(Card).first().simulate('click');
   expect(setSelectedPlant).toHaveBeenCalledTimes(1);
  });

});
