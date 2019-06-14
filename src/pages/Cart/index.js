import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartActions from '~/store/ducks/cart';

import { Container, Product, Amount } from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
    headerTitleStyle: { color: '#f19d9d' },
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        {items.map(item => (
          <Product />
        ))}

        <Amount />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  amount: state.cart.items.reduce((n1, n2) => n1 + n2.quantity * n2.price, 0), // Calculate amount of price * quantity
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
