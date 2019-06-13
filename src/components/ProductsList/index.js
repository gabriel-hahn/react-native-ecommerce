import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsActions from '~/store/ducks/products';

import ProductDetails from '~/components/ProductDetails';

import { Container, Product, ProductImage, ProductDetail } from './styles';

class ProductList extends Component {
  state = {
    showProductDetails: false,
    productClicked: null,
  };

  componentDidMount() {
    const { categoryId, loadProductsRequest } = this.props;

    loadProductsRequest({ categoryId });
  }

  handleProductClick = item => {
    this.setState({ showProductDetails: true, productClicked: item });
  }

  render() {
    const { showProductDetails, productClicked } = this.state;
    const { items } = this.props;

    return (
      <Container>
        {items.map(item => (
          <Product key={item.id} onPress={() => this.handleProductClick(item)}>
            <ProductImage>

            </ProductImage>
            <ProductDetail>
            
            </ProductDetail>
          </Product>
        ))}

        {showProductDetails && <ProductDetails product={productClicked} />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.products.items,
  categoryId: state.categories.currentId,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
