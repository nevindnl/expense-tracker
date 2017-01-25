export const ExpensesActions = {
  REQUEST_EXPENSES: 'REQUEST_EXPENSES',
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  CREATE_EXPENSE: 'CREATE_EXPENSE',
  UPDATE_EXPENSE: 'UPDATE_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  RECEIVE_EXPENSE_ERRORS: 'RECEIVE_EXPENSE_ERRORS',
  SEARCH_EXPENSES: 'SEARCH_EXPENSES',
  RECEIVE_SEARCHED_EXPENSES: 'RECEIVE_SEARCHED_EXPENSES'
};

export const requestExpenses = () => ({
  type: ExpensesActions.REQUEST_EXPENSES
});

export const receiveExpenses = expenses => ({
  type: ExpensesActions.RECEIVE_EXPENSES,
  expenses
});

export const createExpense = expense => ({
  type: ExpensesActions.CREATE_EXPENSE,
  expense
});

export const updateExpense = expense => ({
  type: ExpensesActions.UPDATE_EXPENSE,
  expense
});

export const deleteExpense = id => ({
  type: ExpensesActions.DELETE_EXPENSE,
  id
});

export const removeExpense = id => ({
  type: ExpensesActions.REMOVE_EXPENSE,
  id
});

export const receiveExpenseErrors = errors => ({
  type: ExpensesActions.RECEIVE_EXPENSE_ERRORS,
  errors
});

export const searchExpenses = (t1, t2) => ({
  type: ExpensesActions.SEARCH_EXPENSES,
  t1,
  t2
});

export const receiveSearchedExpenses = expenses => ({
  type: ExpensesActions.RECEIVE_SEARCHED_EXPENSES,
  expenses
});
