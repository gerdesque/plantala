import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => wrapper = shallow(<Header />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display a heading 1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

});
