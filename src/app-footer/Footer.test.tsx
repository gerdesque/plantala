import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { ShallowWrapper } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Footer selectedPlants={[]} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <footer /> container', () => {
    expect(wrapper.find('footer').length).toEqual(1);
  });

  it('should display an <AvatarGroup />', () => {
    expect(wrapper.find(AvatarGroup)).toHaveLength(1);
  });

  it('should display zero <Avatar />s', () => {
    expect(wrapper.find(Avatar)).toHaveLength(0);
  });

});

describe('Non-Empty Footer', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should display 2 <Avatar />s', () => {
    wrapper = shallow(<Footer
      selectedPlants={[
        {name: '1', source: '1.png'},
        {name: '2', source: '2.png'},
      ]} />);
    expect(wrapper.find(Avatar)).toHaveLength(2);
  });

  it('should display no more than 5 <Avatar />s', () => {
    wrapper = shallow(<Footer
      selectedPlants={[
        {name: '1', source: '1.png'},
        {name: '2', source: '2.png'},
        {name: '3', source: '3.png'},
        {name: '4', source: '4.png'},
        {name: '5', source: '5.png'},
        {name: '6', source: '6.png'},
      ]} />);
    expect(wrapper.find(Avatar)).toHaveLength(5);
  });

});