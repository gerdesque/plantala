import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Main from './Main';

describe('Main', () => {

  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => wrapper = shallow(<Main plants={[]} />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div /> container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display a heading 1', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

});
