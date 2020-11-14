import React from 'react';
import { shallow } from 'enzyme';
import Plantala from './Plantala';
import Header from '../app-header/Header';
import Main from '../app-main/Main';
import Footer from '../app-footer/Footer';

describe('Plantala', () => {

  let wrapper: any;

  beforeEach(() => wrapper = shallow(<Plantala />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('should render the Main Component', () => {
    expect(wrapper.containsMatchingElement(
      <Main
        plants={wrapper.instance().state.plants} 
        storedNavigationValue={wrapper.instance().state.storedNavigationValue}/>
    )).toEqual(true);
  });

  it('should render the Footer Component', () => {
    expect(wrapper.containsMatchingElement(
      <Footer 
        selectedPlants={wrapper.instance().state.selectedPlants} />
    )).toEqual(true);
  });
});
