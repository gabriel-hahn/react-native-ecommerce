import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { setProducts, setCategoryId } from '~/store/sagas/products';
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
        getState: () => ({ products: { categoryId: 3 } }),
      },
      setProducts,
    ).toPromise();

    const action = { categoryId: 3, items: apiResponse, type: 'SET_PRODUCTS_SUCCESS' };
    const initialDispatched = { type: 'SET_PRODUCTS_REQUEST' };

    expect(initialDispatched).toEqual(ProductsActions.setProductsRequest());
    expect(dispatched).toContainEqual(action);
  });

  it('Should be able to change categoryId and reload products list', async () => {
    apiMock.onGet('/category_products/2').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      () => setCategoryId({ categoryId: 2 }),
    ).toPromise();

    const action = { categoryId: 2, items: apiResponse, type: 'SET_PRODUCTS_SUCCESS' };
    const initialDispatched = { type: 'SET_CATEGORY_ID' };

    expect(initialDispatched).toEqual(ProductsActions.setCategoryId());
    expect(dispatched).toContainEqual(action);
  });
});
