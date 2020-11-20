import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Mandala from './Mandala';

describe('Mandala', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Mandala plants={[]} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a canvas', () => {
    expect(wrapper.find('canvas')).toHaveLength(1);
  });

});
