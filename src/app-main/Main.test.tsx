import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import Main from './Main';
import { ButtonValue, HeaderValue } from '../app-plantala/Plantala';
import Landing from '../landing/Landing';
import PlantList from '../plant-list/PlantList';

describe('Main in Start mode', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants={[]}
      displayedButtonValue={ButtonValue.Start}
      displayedHeaderValue={HeaderValue.Start} />);
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
    expect(wrapper.containsMatchingElement(<PlantList plants={[]} />)).toEqual(false);
  });

});

describe('Main in Selection mode', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main
      plants={[]}
      displayedButtonValue={ButtonValue.Select}
      displayedHeaderValue={HeaderValue.Select} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Wähle bis zu 5 Karten aus"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Wähle bis zu 5 Karten aus');
  });

  it('should display a <Button /> with the text "Zur Auswahl hinzufügen"', () => {
    expect(wrapper.find(Button).text()).toEqual('Zur Auswahl hinzufügen');
  });

  it('should display a <Landing /> component', () => {
    expect(wrapper.containsMatchingElement(<Landing />)).toEqual(false);
  });

  it('should display a <PlantList /> component', () => {
    expect(wrapper.containsMatchingElement(<PlantList plants={[]} />)).toEqual(true);
  });

});
