import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsActions from '~/store/ducks/products';

import {
  Container, ProductsList, ProductItem, Image, Name, Brand, Price,
} from './styles';

class ProductList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
    categoryId: PropTypes.number.isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
    navigation: PropTypes.func.isRequired,
  };

  state = {
    currentCategory: 1,
  };

  componentDidMount() {
    this.loadProductsList();
  }

  componentDidUpdate() {
    const { categoryId } = this.props;
    const { currentCategory } = this.state;

    if (currentCategory !== categoryId) this.loadProductsList();
  }

  loadProductsList = () => {
    const { categoryId, loadProductsRequest } = this.props;

    loadProductsRequest(categoryId);
  };

  handleProductClick = (product) => {
    const { navigation } = this.props;
    // navigation.navigate('Product', { product })
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        <ProductsList
          data={items}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <ProductItem onPress={() => this.handleProductClick(product)}>
              <Image source={{ uri: product.image }} />
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
              <Price>{`$ ${product.price}`}</Price>
            </ProductItem>
          )}
        />
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
