import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import Main from './Main';
import { Action } from '../app-plantala/Plantala';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';

describe('Main in Start mode', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants = {[]}
      action = {Action.Start}
      setAction = {jest.fn()}
      setSelectedPlant={jest.fn()} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Erstelle dein Mandala!"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Erstelle dein Mandala!');
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
      action = {Action.Select}
      setAction = {jest.fn()}
      setSelectedPlant={jest.fn()} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Wähle 5 Karten"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Wähle 5 Karten');
  });

  it('should display a <Button /> with the text "Zur Auswahl hinzufügen"', () => {
    expect(wrapper.find(Button).text()).toEqual('Zur Auswahl hinzufügen');
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
