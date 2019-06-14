import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesActions from '~/store/ducks/categories';

import {
  Container, Categories, Category, CategoryText,
} from './styles';

class CategoriesHeader extends Component {
  static propTypes = {
    currentCategory: PropTypes.number.isRequired,
    setCurrent: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  handleCurrentCategory = (currentId) => {
    const { setCurrent } = this.props;

    setCurrent(currentId);
  };

  render() {
    const { categories, currentCategory } = this.props;

    return (
      <Container>
        <Categories>
          {categories.map(category => (
            <Category key={category.id} onPress={() => this.handleCurrentCategory(category.id)}>
              <CategoryText current={currentCategory === category.id}>
                {category.title}
              </CategoryText>
            </Category>
          ))}
        </Categories>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentCategory: state.categories.currentId,
  categories: state.categories.items,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesHeader);
