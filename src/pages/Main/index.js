import React, { Component } from 'react';

import { Container } from './styles';

import CategoriesHeader from '~/components/CategoriesHeader';

export default class Main extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
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
