import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductActions from '~/store/ducks/products';

import {
  Container, Categories, Category, CategoryText,
} from './styles';

const CategoriesHeader = ({ currentCategory, setCategoryId }) => (
  <Container>
    <Categories>
      <Category onPress={() => setCategoryId(1)}>
        <CategoryText current={currentCategory === 1}>Camisetas</CategoryText>
      </Category>
      <Category onPress={() => setCategoryId(2)}>
        <CategoryText current={currentCategory === 2}>Camisas</CategoryText>
      </Category>
      <Category onPress={() => setCategoryId(3)}>
        <CategoryText current={currentCategory === 3}>Calças</CategoryText>
      </Category>
      <Category onPress={() => setCategoryId(4)}>
        <CategoryText current={currentCategory === 4}>Bonés</CategoryText>
      </Category>
    </Categories>
  </Container>
);

CategoriesHeader.propTypes = {
  currentCategory: PropTypes.number.isRequired,
  setCategoryId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentCategory: state.products.categoryId,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesHeader);
