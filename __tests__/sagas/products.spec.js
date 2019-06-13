import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { loadProducts } from '~/store/sagas/products';
import ProductsActions from '~/store/ducks/products';

const apiMock = new MockAdapter(api);

const apiResponse = ['Product 1', 'Product 2'];
let dispatched;

beforeEach(() => {
  dispatched = [];
});

describe('Products Saga', () => {
  it('Should be able to set products', async () => {
    apiMock.onGet('/category_products/3').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      () => loadProducts({ categoryId: 3 }),
    ).toPromise();

    const action = { items: apiResponse, type: 'LOAD_PRODUCTS_SUCCESS' };
    expect(dispatched).toContainEqual(action);
  });
});
