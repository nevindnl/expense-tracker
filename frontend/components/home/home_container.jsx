import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Home from './home';
import {logout} from '../../actions/session_actions';
import {requestExpenses, searchExpenses} from '../../actions/expenses_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestExpenses: () => dispatch(requestExpenses()),
  searchExpenses: () => dispatch(searchExpenses())
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Home));
