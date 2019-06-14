import React, { Component } from 'react';

import { Container } from './styles';

export default class Product extends Component {
  static navigationOptions = {
    title: 'Product details',
    headerTitleStyle: { color: '#f19d9d' },
  };

  handleAddToCart = product => {

  }

  render() {
    const { product } = this.props;

    return (
      <Container>
        <Product>
          <ProductImage>

          </ProductImage>
          <ProductDetail>

          </ProductDetail>
          <AddCart onPress={() => this.handleAddToCart(product)}>Add to cart</AddCart>
        </Product>
      </Container>
    );
  }
}
