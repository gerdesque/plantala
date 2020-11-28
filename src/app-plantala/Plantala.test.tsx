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
          selectedPlants={wrapper.instance().state.selectedPlants}
          action={wrapper.instance().state.action}
          setAction={wrapper.instance().setAction}
          setSelectedPlant={wrapper.instance().selectedPlants}
        />,
        <Footer
          selectedPlants={wrapper.instance().state.selectedPlants}
          activePlant={wrapper.instance().state.selectedPlants[0]}
          setActivePlant={wrapper.instance().activatedPlants}
          transformPlant={wrapper.instance().transformPlant}
        />
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

  it('toogle select state for plant items', () => {
    const plantItems = [
      {name: 'Gummiakazie', source: 'A.png', selected: false},
      {name: 'Ananas', source: 'A.png', selected: false},
      {name: 'Kardamom', source: 'A.png', selected: true},
    ]
    const filteredPlantItems = [
      {name: 'Gummiakazie', source: 'A.png', selected: true},
      {name: 'Ananas', source: 'A.png', selected: true},
      {name: 'Kardamom', source: 'A.png', selected: false},
    ]
    wrapper.setState({ plants: plantItems });
    wrapper.instance().selectedPlants(plantItems[0]);
    wrapper.instance().selectedPlants(plantItems[1]);
    wrapper.instance().selectedPlants(plantItems[2]);
    expect(wrapper.state('plants')).toEqual(filteredPlantItems);
  });

  it('toogle active state for plant items', () => {
    const plantItems = [
      {name: 'Gummiakazie', source: 'A.png', selected: true},
      {name: 'Ananas', source: 'A.png', selected: true},
      {name: 'Kardamom', source: 'A.png', selected: true},
    ]
    const filteredPlantItems = [
      {name: 'Gummiakazie', source: 'A.png', selected: true, active: true},
      {name: 'Ananas', source: 'A.png', selected: true, active: false},
      {name: 'Kardamom', source: 'A.png', selected: true, active: false},
    ]

    wrapper.setState({ plants: plantItems });
    wrapper.instance().activatedPlants(plantItems[0]);
    expect(wrapper.state('plants')).toEqual(filteredPlantItems);
  });


  it('transform active plant in plant items', () => {
    const plantItems = [
      {name: 'Ananas', source: 'A.png', selected: true, active: false},
      {name: 'Kardamom', source: 'A.png', selected: true, active: true}
    ]
    const filteredPlantItems = [
      {name: 'Ananas', source: 'A.png', selected: true, active: false},
      {name: 'Kardamom', source: 'A.png', selected: true, active: true, rotation: 100}
    ]

    wrapper.setState({ plants: plantItems });
    wrapper.instance().transformPlant(plantItems[1], 'rotation', 100);
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
