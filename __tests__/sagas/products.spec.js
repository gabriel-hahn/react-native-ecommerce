import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { loadProducts } from '~/store/sagas/products';

const apiMock = new MockAdapter(api);

const apiResponse = {
  products: ['Product 1', 'Product 2'],
};

let dispatched;

beforeEach(() => {
  dispatched = [];
});

const runSagaTest = async (method, param) => {
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    () => method(param),
  ).toPromise();
};

describe('Products Saga', () => {
  it('Should be able to set products', async () => {
    apiMock.onGet('/category_products/3').reply(200, apiResponse);
    await runSagaTest(loadProducts, { categoryId: 3 });

    const action = { items: apiResponse.products, type: 'LOAD_PRODUCTS_SUCCESS' };
    expect(dispatched).toContainEqual(action);
  });

  it('Should be able to set a error message when API returns a error', async () => {
    apiMock.onGet('/category_products/3').reply(404, null);
    await runSagaTest(loadProducts, { categoryId: 3 });

    const action = { message: 'Oh, something is wrong now, try again!', type: 'SET_ERROR' };
    expect(dispatched).toContainEqual(action);
  });
});
