import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductActions from '~/store/ducks/products';

import {
  Container, Categories, Category, CategoryText,
} from './styles';

/**
 * Categories in this app are static. In a next improvement or necessity of the ecommerce,
 * it's possible retrieve categories of a API, being dynamic.
 */
const categories = [
  {
    id: 1,
    name: 'Camisetas',
  },
  {
    id: 2,
    name: 'Camisas',
  },
  {
    id: 3,
    name: 'Calças',
  },
  {
    id: 4,
    name: 'Bonés',
  },
];

const CategoriesHeader = ({ currentCategory, setCategoryId }) => (
  <Container>
    <Categories>
      {categories.map(category => (
        <Category key={category.id} onPress={() => setCategoryId(category.id)}>
          <CategoryText current={currentCategory === category.id}>{category.name}</CategoryText>
        </Category>
      ))}
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
