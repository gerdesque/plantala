import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Plantala from '../app-plantala/Plantala';

describe('App', () => {

  let wrapper: any;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the Plantala Component', () => {
    expect(wrapper.containsMatchingElement(<Plantala />)).toEqual(true);
  });

});
