import {ExpensesActions} from '../actions/expenses_actions';
import {merge} from 'lodash';

const ExpensesReducer = (state = {expenses: [], errors: []}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case ExpensesActions.RECEIVE_EXPENSES:
      newState.expenses = action.expenses;
			newState.errors = [];
      return newState;
    case ExpensesActions.REMOVE_EXPENSE:
      const i = newState.expenses.findIndex(expense => (
        expense.id === action.id
      ));
      newState.expenses.splice(i, 1);
      newState.errors = [];
      return newState;
    case ExpensesActions.RECEIVE_EXPENSE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default ExpensesReducer;
