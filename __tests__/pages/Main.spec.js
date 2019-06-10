import React from 'react';
import { Provider } from 'redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import Main from '../../src/pages/Main';

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(<Main />);
});

describe('Main page', () => {
  it('Should render Main page correctly', () => {
    // expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
