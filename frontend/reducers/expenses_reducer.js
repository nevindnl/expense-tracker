import {ExpensesActions} from '../actions/expenses_actions';
import {merge} from 'lodash';

const ExpensesReducer = (state = {expenses: [], errors: [], t1: '', t2: '', searchExpenses: []}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case ExpensesActions.RECEIVE_EXPENSES:
      newState.expenses = action.expenses;
			newState.errors = [];
      return newState;
    case ExpensesActions.REMOVE_EXPENSE:
      const i1 = newState.expenses.findIndex(expense => (
        expense.id === action.id
      ));
      const i2 = newState.searchExpenses.findIndex(expense => (
        expense.id === action.id
      ));
      newState.expenses.splice(i1, 1);
      if (i2 !== -1) newState.searchExpenses.splice(i2, 1);
      newState.errors = [];
      return newState;
    case ExpensesActions.RECEIVE_EXPENSE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case ExpensesActions.UPDATE_SEARCH:
      newState.t1 = action.t1;
      newState.t2 = action.t2;
      return newState;
    case ExpensesActions.RECEIVE_SEARCHED_EXPENSES:
      newState.searchExpenses = action.expenses;
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ExpensesReducer;
