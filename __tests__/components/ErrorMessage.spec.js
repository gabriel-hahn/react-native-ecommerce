import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import ErrorMessage from '~/components/ErrorMessage';

const mockStore = createStore();

const INITIAL_STATE = {
  error:  {
    visible: true,
    message: "Message error test",
  }    
};

const INVISIBLE_STATE = {
    error:  {
      visible: false,
      message: "Message error test",
    }    
  };

let wrapper;
let invisibleWrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore(INITIAL_STATE)}>
      <ErrorMessage />
    </Provider>,
  );
  
  invisibleWrapper = ReactTestRender.create(
    <Provider store={mockStore(INVISIBLE_STATE)}>
      <ErrorMessage />
    </Provider>,
  );
});

describe('ErrorMessage Component', () => {
  describe('Smoke tests', () => {
    it('Should render ErrorMessage component correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });    
  });

  describe('Component structure', () => {
    it('Should render message and Icon error', () => {
      expect(wrapper.root.findAllByType('Text').length).toBe(2);
    });

    it('Should not render component when visible prop is false', () => {
      expect(invisibleWrapper.root.findAllByType('Text').length).toEqual(0);
    });
  });
});
