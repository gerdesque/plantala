import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import { ShallowWrapper } from 'enzyme';
import Main from './Main';

describe('Main', () => {

  let shallow: any;
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Main plants={[]} storedNavigationValue=''/>);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should display the text "Erstelle dein Mandala!"', () => {
    expect(wrapper.find(Typography).text()).toEqual('Erstelle dein Mandala!');
  });

  it('should display a <Button /> with an empty label', () => {
    expect(wrapper.find(Button).text()).toEqual('');
  });

});
