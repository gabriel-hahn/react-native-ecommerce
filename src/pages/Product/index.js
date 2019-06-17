import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CartActions from '~/store/ducks/cart';

import { colors } from '~./styles';
import {
  Container,
  ProductCard,
  Image,
  Info,
  Text,
  Name,
  Brand,
  Price,
  Button,
  ButtonText,
} from './styles';

class Product extends Component {
  static navigationOptions = {
    title: 'Product Details',
    headerTintColor: colors.secondary,
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerRight: <View />,
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleAddToCart = (product) => {
    const { addItem } = this.props;

    addItem(product);
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');

    return (
      <Container>
        <ProductCard>
          <Image source={{ uri: product.image }} />
          <Info>
            <Text>
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
            </Text>
            <Price>{`$ ${product.price}`}</Price>
          </Info>
          <Button
            onPress={() => {
              this.handleAddToCart(product);
            }}
          >
            <ButtonText>Add to cart</ButtonText>
          </Button>
        </ProductCard>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapDispatchToProps)(Product);
