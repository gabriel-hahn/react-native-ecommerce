import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setError: ['message'],
  hideError: null,
});

export const ErrorTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  visible: false,
  message: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ERROR]: (state, { message }) => ({ visible: true, message }),
  [Types.HIDE_ERROR]: state => ({ visible: false, message: null }),
});
