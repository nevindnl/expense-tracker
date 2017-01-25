import {ExpensesActions, requestExpenses, receiveExpenses, receiveExpense, removeExpense, receiveExpenseErrors, receiveSearchedExpenses} from '../actions/expenses_actions';
import * as ExpensesAPI from '../util/expenses_api_util';

const ExpensesMiddleware = ({getState, dispatch}) => next => action => {
  let success = expenses => dispatch(receiveExpenses(expenses));
  let error = data => dispatch(receiveExpenseErrors(data));

  switch(action.type){
    case ExpensesActions.REQUEST_EXPENSES:
      ExpensesAPI.requestExpenses(success);
      return next(action);
    case ExpensesActions.CREATE_EXPENSE:
      success = () => dispatch(requestExpenses());
      ExpensesAPI.createExpense(action.expense, success, error);
      return next(action);
    case ExpensesActions.UPDATE_EXPENSE:
      success = () => dispatch(requestExpenses());
      ExpensesAPI.updateExpense(action.expense, success, error);
      return next(action);
    case ExpensesActions.DELETE_EXPENSE:
      success = () => dispatch(removeExpense(action.id));
      ExpensesAPI.deleteExpense(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpensesMiddleware;
