import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesActions from '~/store/ducks/categories';

import {
  Container, CategoryBar, Category, CategoriesList, Title,
} from './styles';

class CategoriesHeader extends Component {
  static propTypes = {
    currentCategory: PropTypes.number.isRequired,
    setCurrent: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ),
    loadCategoriesRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    categories: [],
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
        <CategoryBar>
          <CategoriesList
            data={categories}
            keyExtractor={category => String(category.id)}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item: category }) => (
              <Category
                onPress={() => this.handleCurrentCategory(category.id)}
                active={category.id === currentCategory}
              >
                <Title active={category.id === currentCategory}>{category.title}</Title>
              </Category>
            )}
          />
        </CategoryBar>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentCategory: state.categories.currentId,
  categories: state.categories.items || [],
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesHeader);
