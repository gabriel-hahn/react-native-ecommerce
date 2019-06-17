import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorActions from '~/store/ducks/error';

import {
  Container, Error, HideButton, HideIcon,
} from './styles';

const ErrorMessage = ({ error: { message, visible }, hideError }) => visible && (
  <Container>
    <Error>{message}</Error>
    <HideButton onPress={hideError}>
      <HideIcon />
    </HideButton>
  </Container>
);

ErrorMessage.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);
