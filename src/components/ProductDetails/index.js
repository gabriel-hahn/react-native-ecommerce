import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartActions from '~/store/ducks/cart';
import PropTypes from 'prop-types';

import { Container } from './styles';

class ProductDetails extends Component {
  handleAddItemCart = item => {
    const { addItem } = this.props;
    
    addItem(item);
  }

  render() {
    return (
      <Container />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetails);
