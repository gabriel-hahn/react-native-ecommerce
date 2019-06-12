import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/products';
import CategoriesActions from '~/store/ducks/categories';

import { Container } from './styles';

import CategoriesHeader from '~/components/CategoriesHeader';

class Main extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTitleStyle: { color: '#f19d9d' },
  };

  componentDidMount() {
    const { setCategoriesRequest, setProductsRequest } = this.props;

    setCategoriesRequest();
    setProductsRequest();
  }

  render() {
    const { currentCategoryId } = this.props;

    return (
      <Container>
        <CategoriesHeader currentCategory={currentCategoryId} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...CategoriesActions }, dispatch);

const mapStateToProps = state => ({
  currentCategoryId: state.categories.currentId,
  products: state.products,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
