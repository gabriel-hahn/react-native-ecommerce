import React, { Component } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

export default class CategoriesHeader extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Text>T-shirts</Text>
        <Text>Shirts</Text>
        <Text>Cap</Text>
        <Text>Pants</Text>
      </Container>
    );
  }
}
