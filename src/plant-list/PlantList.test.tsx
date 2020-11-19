import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import PlantList from './PlantList';
import { Card } from '@material-ui/core';
import Carousel from 'react-multi-carousel';

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
    expect(wrapper.find(Card)).toHaveLength(3);
  });
  

});
