import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import Main from './Main';
import { Action } from '../app-plantala/Plantala';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';
import Mandala from '../mandala/Mandala';

describe('Main in Start mode', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants = {[]}
      selectedPlants = {[]}
      action = {Action.Start}
      setAction = {jest.fn()}
      setSelectedPlant={jest.fn()} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Erstelle dein Plantala!"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Erstelle dein Plantala!');
  });

  it('should display a <Button /> with the text "Start"', () => {
    expect(wrapper.find(Button).text()).toEqual('Start');
  });

  it('should display a <Landing /> component', () => {
    expect(wrapper.containsMatchingElement(<Landing />)).toEqual(true);
  });

  it('should display a <PlantList /> component', () => {
    expect(wrapper.containsMatchingElement(<PlantList
      plants={[]}
      setSelectedPlant={wrapper.instance.setSelectedPlant}
    />)).toEqual(false);
  });

});

describe('Main in Selection mode', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants={[]}
      selectedPlants={[]}
      action = {Action.Select}
      setAction = {jest.fn()}
      setSelectedPlant={jest.fn()} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Wähle 5 Karten"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Wähle 5 Karten');
  });

  it('should display a <Button /> with the text "Plantala erstellen"', () => {
    expect(wrapper.find(Button).text()).toEqual('Plantala erstellen');
  });

  it('should display a <Landing /> component', () => {
    expect(wrapper.containsMatchingElement(<Landing />)).toEqual(false);
  });

  it('should display a <PlantList /> component', () => {
    expect(wrapper.containsMatchingElement(<PlantList
      plants={[]}
      setSelectedPlant={wrapper.instance.setSelectedPlant}
    />)).toEqual(true);
  });

});


describe('Main in Creating mode', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants={[]}
      selectedPlants={[]}
      action = {Action.Done}
      setAction = {jest.fn()}
      setSelectedPlant={jest.fn()} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Gestalte dein Plantala"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Gestalte dein Plantala');
  });

  it('should display a <Button /> with the text "Fertig"', () => {
    expect(wrapper.find(Button).text()).toEqual('Fertig');
  });

  it('should display a <Landing /> component', () => {
    expect(wrapper.containsMatchingElement(<Landing />)).toEqual(false);
  });

  it('should display a <PlantList /> component', () => {
    expect(wrapper.containsMatchingElement(<PlantList
      plants={[]}
      setSelectedPlant={wrapper.instance.setSelectedPlant}
    />)).toEqual(false);
  });

  it('should display a <Mandala /> component', () => {
    expect(wrapper.containsMatchingElement(<Mandala
      selectedPlants={[]}
    />)).toEqual(true);
  });

});
