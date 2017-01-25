import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Report from './report';
import {updateSearch, searchExpenses} from '../../actions/expenses_actions';

const mapStatetoProps = state => ({
  t1: state.expenses.t1,
  t2: state.expenses.t2
});

const mapDispatchtoProps = dispatch => ({
  updateSearch: (t1, t2) => dispatch(updateSearch(t1, t2)),
  searchExpenses: () => dispatch(searchExpenses())
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Report));
