import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsActions from '~/store/ducks/products';

import {
  Container, Product, ProductImage, ProductDetail,
} from './styles';

class ProductList extends Component {
  componentDidMount() {
    const { categoryId, loadProductsRequest } = this.props;

    loadProductsRequest(categoryId);
  }

  handleProductClick = (product) => {
    const { navigation } = this.props;
    // navigation.navigate('Product', { product })
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        {items.map(item => (
          <Product key={item.id} onPress={() => this.handleProductClick(item)}>
            <ProductImage />
            <ProductDetail />
          </Product>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.products.items,
  categoryId: state.categories.currentId,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
