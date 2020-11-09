import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Plantala from './Plantala';
import Header from './header/Header';

describe('Plantala', () => {

  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => wrapper = shallow(<Plantala />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
