import React from 'react';

import { Container, Categories, Categorie } from './styles';

const CategoriesHeader = () => (
  <Container>
    <Categories>
      <Categorie>Camisetas</Categorie>
      <Categorie>Camisas</Categorie>
      <Categorie>Calças</Categorie>
      <Categorie>Bonés</Categorie>
    </Categories>
  </Container>
);

export default CategoriesHeader;
