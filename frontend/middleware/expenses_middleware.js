import {ExpensesActions, requestExpenses, receiveExpenses, receiveExpense, removeExpense, receiveExpenseErrors, searchExpenses, receiveSearchedExpenses} from '../actions/expenses_actions';
import * as ExpensesAPI from '../util/expenses_api_util';

const ExpensesMiddleware = ({getState, dispatch}) => next => action => {
  let success = expenses => dispatch(receiveExpenses(expenses));
  let error = data => dispatch(receiveExpenseErrors(data));

  switch(action.type){
    case ExpensesActions.REQUEST_EXPENSES:
      ExpensesAPI.requestExpenses(success);
      return next(action);
    case ExpensesActions.CREATE_EXPENSE:
      success = () => {dispatch(requestExpenses()); dispatch(searchExpenses());};
      ExpensesAPI.createExpense(action.expense, success, error);
      return next(action);
    case ExpensesActions.UPDATE_EXPENSE:
      success = () => {dispatch(requestExpenses()); dispatch(searchExpenses());};
      ExpensesAPI.updateExpense(action.expense, success, error);
      return next(action);
    case ExpensesActions.DELETE_EXPENSE:
      success = () => {dispatch(removeExpense(action.id)); dispatch(searchExpenses());};
      ExpensesAPI.deleteExpense(action.id, success, error);
      return next(action);
    case ExpensesActions.SEARCH_EXPENSES:
      success = expenses => dispatch(receiveSearchedExpenses(expenses));
      const state = getState().expenses;
      const t1 = state.t1;
      const t2 = state.t2;
      ExpensesAPI.searchExpenses(t1, t2, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpensesMiddleware;
