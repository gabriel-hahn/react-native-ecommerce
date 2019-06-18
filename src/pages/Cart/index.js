import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import CartActions from '~/store/ducks/cart';

import { colors } from '~./styles';
import {
  Container,
  CartList,
  CartItem,
  Image,
  Info,
  Name,
  Brand,
  Price,
  Form,
  AmountInput,
  DeleteButton,
  DeleteIcon,
  EmptyMessage,
  SubTotal,
  SubTotalText,
  SubTotalPrice,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
    headerTitleStyle: { color: colors.secondary },
  };

  static propTypes = {
    removeItem: PropTypes.func.isRequired,
    changeItemQuantity: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  handleConfirmDelete = (product) => {
    const { removeItem } = this.props;

    Alert.alert('Remove item', 'Are you sure you want to delete this item?', [
      { text: 'Cancel' },
      { text: 'Yes', onPress: () => removeItem(product.id) },
    ]);
  };

  render() {
    const { items, amount, changeItemQuantity } = this.props;

    return (
      <Container>
        {items.length > 0 ? (
          <Fragment>
            <CartList
              data={items}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: product }) => (
                <CartItem key={product.id}>
                  <Image source={{ uri: product.image }} />
                  <Info>
                    <Name>{product.name}</Name>
                    <Brand>{product.brand}</Brand>
                    <Price>{`$ ${product.price}`}</Price>
                  </Info>
                  <Form>
                    <AmountInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      defaultValue={String(product.quantity)}
                      maxLength={2}
                      keyboardType="numeric"
                      onChangeText={text => changeItemQuantity(product.id, Number(text))}
                    >
                      {product.amount}
                    </AmountInput>
                    <DeleteButton onPress={() => this.handleConfirmDelete(product)}>
                      <DeleteIcon />
                    </DeleteButton>
                  </Form>
                </CartItem>
              )}
            />
            <SubTotal>
              <SubTotalText>Total</SubTotalText>
              <SubTotalPrice>{`R$ ${amount.toFixed(2)}`}</SubTotalPrice>
            </SubTotal>
          </Fragment>
        ) : (
          <EmptyMessage>There are no products in the cart.</EmptyMessage>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  amount: state.cart.items.reduce((total, item) => total + item.quantity * item.price, 0), // Calculate amount of price * quantity
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
