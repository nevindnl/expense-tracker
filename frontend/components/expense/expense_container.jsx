import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Expense from './expense';
import {updateExpense, deleteExpense} from '../../actions/expenses_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
  updateExpense: expense => dispatch(updateExpense(expense)),
  deleteExpense: id => dispatch(deleteExpense(id))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Expense));
