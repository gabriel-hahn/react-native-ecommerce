import React from 'react';
import ReactTestRender from 'react-test-renderer';

import PlaceholderLoading from '~/components/PlaceholderLoading';

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(<PlaceholderLoading />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('PlaceholderLoading page', () => {
  describe('Smoke tests', () => {
    it('Should render PlaceholderLoading page correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
