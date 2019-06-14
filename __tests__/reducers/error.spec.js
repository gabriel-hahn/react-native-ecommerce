import ErrorActions, { reducer } from '~/store/ducks/error';

const INITIAL_STATE = {
  visible: false,
  message: null,
};

describe('Error Reducer', () => {
  it('Should be able to set a new error', () => {
    const error = { visible: true, message: 'Error message' };
    const state = reducer(INITIAL_STATE, ErrorActions.setError(error.message));

    expect(state).toEqual(error);
  });

  it('Should be able to clean a error', () => {
    const error = { visible: false, message: null };
    const state = reducer(INITIAL_STATE, ErrorActions.hideError());

    expect(state).toEqual(error);
  });
});
