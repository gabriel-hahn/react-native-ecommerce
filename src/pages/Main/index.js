import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/products';
import PropTypes from 'prop-types';

import { Container } from './styles';

import CategoriesHeader from '~/components/CategoriesHeader';
import ProductsList from '~/components/ProductsList';

class Main extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTitleStyle: { color: '#f19d9d' },
  };

  static propTypes = {
    setProductsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { setProductsRequest } = this.props;
    setProductsRequest();
  }

  render() {
    return (
      <Container>
        <CategoriesHeader />
        <ProductsList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
