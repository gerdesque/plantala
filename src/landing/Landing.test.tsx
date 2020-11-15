import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Landing />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a logo', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

});
