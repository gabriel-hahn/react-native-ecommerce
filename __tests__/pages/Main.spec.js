import React from 'react';
import { shallow } from 'enzyme';

import Main from '~/pages/Main';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Main />).dive();
});

describe('Main page', () => {
  describe('Smoke tests', () => {
    it('Should render Main page correctly', () => {
      // expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
