import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Header from './Header';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

describe('Header', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Header />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the <AppBar /> Component', () => {
    expect(wrapper.containsMatchingElement(AppBar)).toEqual(true);
  });

  it('should display a logo', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render the <Typography /> Component', () => {
    expect(wrapper.containsMatchingElement(Typography)).toEqual(true);
  });

  it('should render the title "Plantala"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Plantala');
  });
  

});
