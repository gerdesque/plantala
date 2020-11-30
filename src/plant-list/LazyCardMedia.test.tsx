import React from 'react';
import {createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import LazyCardMedia from './LazyCardMedia';
import { CardMedia } from '@material-ui/core';


describe('LazyCardMedia', () => {

  let shallow: any;
  let wrapper: ShallowWrapper;
  const props = { className: 'classes.plantMedia', image: 'a.png', title: 'Kardamom' }

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<LazyCardMedia {...props} />)
  })

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render no <CardMedia /> component', () => {
    expect(wrapper.find(CardMedia)).toHaveLength(0);
  });

  it('should render no <div /> component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
