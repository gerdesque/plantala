import React from 'react';
import { Button } from '@material-ui/core';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Plantala from './Plantala';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';

describe('Plantala', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Plantala />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Header, Main and Footer Component', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Header />,
        <Main
          plants={wrapper.instance().state.plants} 
          action={wrapper.instance().state.action}
          setAction={wrapper.instance().setAction}
          setSelectedPlant={wrapper.instance().setSelectedPlant}
        />,
        <Footer 
          selectedPlants={wrapper.instance().state.selectedPlants}
        />,
      ])
    ).toEqual(true);
  });
});

describe('mounted Plantala', () => {
  let mount: any;
  let wrapper: any;

  beforeEach(() => {
    mount = createMount();
    wrapper = mount(<Plantala />);
  });

  it('calls setAction when an action <Button /> is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'setAction');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(Button)
      .first()
      .simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
