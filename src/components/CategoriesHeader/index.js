import React, { Component } from 'react';

import { Container, Categories, Categorie } from './styles';

export default class CategoriesHeader extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Categories>
          <Categorie>Shirts</Categorie>
          <Categorie>Hats</Categorie>
          <Categorie>Pants</Categorie>
          <Categorie>Shoes</Categorie>
        </Categories>
      </Container>
    );
  }
}
