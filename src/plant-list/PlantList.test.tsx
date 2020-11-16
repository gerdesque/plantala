import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import PlantList from './PlantList';
import { Card, Grid } from '@material-ui/core';

describe('PlantList', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<PlantList plants={[]} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <Grid /> container', () => {
    expect(wrapper.find(Grid)).toHaveLength(1);
  });

  it('should render no <Card /> component', () => {
    expect(wrapper.find(Card)).toHaveLength(0);
  });

  it('should render no 3 <Card /> components', () => {
    const plants = [
      {name: 'Lathraea squamaria', source: '1.png', description: 'Lehrtafel von Carl von Tubeuf'},
      {name: 'Oedogonium diplandrum Juranyi', source: '2.png'},
      {name: 'Nicotiana Tabacum L.', source: '3.png'}
    ]
    wrapper = shallow(<PlantList plants={plants} />);
    expect(wrapper.find(Card)).toHaveLength(3);
  });
  

});
