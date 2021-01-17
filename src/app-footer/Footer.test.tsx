import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Footer from './Footer';
import { IPlant } from '../plant/Plant';
import { Action } from '../app-plantala/Plantala';

describe('Footer', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Footer
      selectedPlants={[]}
      activePlant={{} as IPlant}
      setActivePlant={jest.fn()}
      transformPlant={jest.fn()}
      action={Action.Select}
      />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <footer /> container', () => {
    expect(wrapper.find('footer').length).toEqual(1);
  });

  it('should display an <AvatarGroup />', () => {
    expect(wrapper.find(AvatarGroup)).toHaveLength(1);
  });

  it('should display zero <Avatar />s', () => {
    expect(wrapper.find(Avatar)).toHaveLength(0);
  });

});

describe('Non-Empty Footer', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should display 2 <Avatar />s', () => {
    const selectedPlants = [
      {name: '1', source: '1.png', selected: true},
      {name: '2', source: '2.png', selected: true},
    ]
    wrapper = shallow(<Footer
      selectedPlants={selectedPlants}
      activePlant={{} as IPlant}
      setActivePlant={jest.fn()}
      transformPlant={jest.fn()} />);
    expect(wrapper.find(Avatar)).toHaveLength(2);
  });

  it('should trigger setActivePlant when <Avatar /> component is clicked', () => {
    const selectedPlants = [
      {name: '1', source: '1.png', selected: true},
      {name: '2', source: '2.png', selected: true},
    ]
    const setActivePlant = jest.fn();

    wrapper = shallow(<Footer
      selectedPlants={selectedPlants}
      activePlant={{} as IPlant}
      setActivePlant={setActivePlant}
      transformPlant={jest.fn()} />);

   wrapper.find(Avatar).first().simulate('click');
   expect(setActivePlant).toHaveBeenCalledTimes(1);
  });


  it('should display no more than 5 <Avatar />s', () => {
    const selectedPlants = [
      {name: '1', source: '1.png', selected: true},
      {name: '2', source: '2.png', selected: true},
      {name: '3', source: '3.png', selected: true},
      {name: '4', source: '4.png', selected: true},
      {name: '5', source: '5.png', selected: true},
      {name: '6', source: '6.png', selected: true},
    ]

    wrapper = shallow(<Footer
      selectedPlants={selectedPlants}
      activePlant={{} as IPlant}
      setActivePlant={jest.fn()}
      transformPlant={jest.fn()} />);
    expect(wrapper.find(Avatar)).toHaveLength(5);
  });

});