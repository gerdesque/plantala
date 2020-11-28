import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Avatar, SwipeableDrawer, Slider } from '@material-ui/core';
import Drawer from './Drawer';
import { IPlant } from '../plant/Plant';

describe('Drawer', () => {

  let shallow: any;
  let wrapper:  any;
  const setActivePlant = jest.fn();
  const transformPlant = jest.fn();
  const activePlant = {name: 'Kardamom', source: 'A.png', selected: true, active: true}

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Drawer
      activePlant={activePlant}
      setActivePlant={setActivePlant}
      transformPlant={transformPlant}
      />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <SwipeableDrawer /> container', () => {
    expect(wrapper.find(SwipeableDrawer).length).toEqual(1);
  });

  it('should activate plant when <SwipeableDrawer /> component is opened', () => {
    wrapper.find(SwipeableDrawer).simulate('open');
    expect(setActivePlant).toHaveBeenCalledTimes(1);
  });
 
  it('should deactivate plant when <SwipeableDrawer /> component is closed', () => {
    wrapper.find(SwipeableDrawer).simulate('close');
    expect(setActivePlant).toHaveBeenCalledTimes(1);
  });

  it('should display the active <Avatar />', () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it('should display 3 <Slider /> components', () => {
    expect(wrapper.find(Slider)).toHaveLength(3);
  });

  it('should transform active plant when rotation <Slider /> component has changed', () => {
    wrapper.find(Slider).at(0).simulate('change', undefined, 360);
    expect(transformPlant).toHaveBeenCalledWith(activePlant, 'rotation', 360);
  });

  it('should transform active plant when amount <Slider /> component has changed', () => {
    wrapper.find(Slider).at(1).simulate('change', undefined, 20);
    expect(transformPlant).toHaveBeenCalledWith(activePlant, 'amount', 20);
  });

  it('should transform active plant when scale <Slider /> component has changed', () => {
    wrapper.find(Slider).at(2).simulate('change', undefined, 2);
    expect(transformPlant).toHaveBeenCalledWith(activePlant, 'scale', 2);
  });

});
