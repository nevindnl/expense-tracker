import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import SearchExpenses from './search_expenses';

const mapStatetoProps = state => ({
  expenses: state.expenses.searchExpenses
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(SearchExpenses));
