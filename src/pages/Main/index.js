import React from 'react';

import { Container } from './styles';

import CategoriesHeader from '~/components/CategoriesHeader';
import ProductsList from '~/components/ProductsList';

const Main = () => (
  <Container>
    <CategoriesHeader />
    <ProductsList />
  </Container>
);

Main.navigationOptions = {
  title: 'GoCommerce',
  headerTitleStyle: { color: '#f19d9d' },
};

export default Main;
