import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { loadCategories } from '~/store/sagas/categories';

const apiMock = new MockAdapter(api);

const apiResponse = ['Category 1', 'Category 2'];
let dispatched;

beforeEach(() => {
  dispatched = [];
});

describe('Categories Saga', () => {
  it('Should be able to set categories', async () => {
    apiMock.onGet('/categories').reply(200, apiResponse);
    await runSagaTest(loadCategories);

    const action = { items: apiResponse, type: 'LOAD_CATEGORIES_SUCCESS' };
    expect(dispatched).toContainEqual(action);
  });

  it('Should be able to set a error message when API returns a error', async () => {
    apiMock.onGet('/categories').reply(404, null);
    await runSagaTest(loadCategories);

    const action = { message: "Oh, something is wrong now, try again!", type: "SET_ERROR" };
    expect(dispatched).toContainEqual(action);
  });
});

runSagaTest = async (method, param) => {
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    () => method(param),
  ).toPromise();
}
