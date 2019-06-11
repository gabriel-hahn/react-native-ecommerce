import React, { Component } from 'react';

import { Container } from './styles';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
    headerTitleStyle: { color: '#f19d9d' },
  };

  render() {
    return <Container />;
  }
}
