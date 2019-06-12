import React, { Component } from 'react';

import { Container } from './styles';

export default class Product extends Component {
  static navigationOptions = {
    title: 'Product details',
    headerTitleStyle: { color: '#f19d9d' },
  };

  render() {
    return <Container />;
  }
}
