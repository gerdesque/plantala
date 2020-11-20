import React from 'react';
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

  it('should render the Header, Main and Footer component', () => {
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

  it('updates action state', () => {
    expect(wrapper.state('action')).toEqual('Start');
    wrapper.instance().setAction();
    expect(wrapper.state('action')).toEqual('Select');
    wrapper.instance().setAction();
    expect(wrapper.state('action')).toEqual('Done');
    wrapper.instance().setAction();
    expect(wrapper.state('action')).toEqual('Again');
    wrapper.instance().setAction();
    expect(wrapper.state('action')).toEqual('Start');
  });

  it('toogle active state for plant items', () => {
    const plantItems = [
      {name: 'Gummiakazie', source: 'A.png', description: 'Acacia Senegal', active: false},
      {name: 'Ananas', source: 'A.png', description: 'Ananas sativus', active: false},
      {name: 'Mohrenhirse', source: 'A.png', description: 'Andropogon Sorghum Brotero', active: false},
      {name: 'Kolabaum', source: 'C.png', description: 'Cola acuminata', active: false},
      {name: 'Muskatnussbaum', source: 'M.png', description: 'Myristica fragrans Houttuyn', active: false}, 
    ]
    wrapper.setState({ plants: plantItems });
    wrapper.instance().activatePlant(plantItems[0]);
    wrapper.instance().activatePlant(plantItems[1]);
    wrapper.instance().activatePlant(plantItems[4]);
    //wrapper.instance().activatePlant(plantItems[0]);
    const filteredPlantItems = [
      {name: 'Gummiakazie', source: 'A.png', description: 'Acacia Senegal', active: true},
      {name: 'Ananas', source: 'A.png', description: 'Ananas sativus', active: true},
      {name: 'Mohrenhirse', source: 'A.png', description: 'Andropogon Sorghum Brotero', active: false},
      {name: 'Kolabaum', source: 'C.png', description: 'Cola acuminata', active: false},
      {name: 'Muskatnussbaum', source: 'M.png', description: 'Myristica fragrans Houttuyn', active: true}, 
    ]
    expect(wrapper.state('plants')).toEqual(filteredPlantItems);
  });
});

describe('Mounted Plantala', () => {
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
      .find('button')
      .first()
      .simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
