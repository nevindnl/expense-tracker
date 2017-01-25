import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Expenses from './expenses';
import {createExpense} from '../actions/expenses_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  expenses: state.expenses.expenses,
  errors: state.expenses.errors
});

const mapDispatchtoProps = dispatch => ({
  createExpense: expense => dispatch(createExpense(expense))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Expenses));
