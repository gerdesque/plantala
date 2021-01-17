import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Image from './Image';
import Mandala from '../mandala/Mandala';

describe('Image', () => {

  let shallow: any;
  let wrapper: any;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Image selectedPlants={[]} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a logo', () => {
    expect(wrapper.find(Mandala)).toHaveLength(1);
  });

});
