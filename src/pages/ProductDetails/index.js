import React, { Component } from 'react';

import { Container } from './styles';

export default class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Product details',
    headerTitleStyle: { color: '#f19d9d' },
  };

  render() {
    return <Container />;
  }
}
