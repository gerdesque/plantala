import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Plant from './Plant';
import Typography from '@material-ui/core/Typography';

describe('Header', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Plant name='' source='' />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the title "Plantala"', () => {
    expect(wrapper.find(Typography).text()).toEqual('');
  });
  

});
