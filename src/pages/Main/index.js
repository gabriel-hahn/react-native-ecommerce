import React, { Component } from 'react';

import { Container } from './styles';

import CategoriesHeader from '~/components/CategoriesHeader';

export default class Main extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTitleStyle: { color: '#f19d9d' },
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <CategoriesHeader />
      </Container>
    );
  }
}
