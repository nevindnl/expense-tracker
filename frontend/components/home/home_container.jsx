import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Home from './home';
import {logout} from '../../actions/session_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Home));
