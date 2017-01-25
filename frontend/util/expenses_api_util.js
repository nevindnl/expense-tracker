export const requestExpenses = (success, error) => {
  $.get({
    url: 'api/expenses',
    success,
    error
  });
};

export const createExpense = (expense, success, error) => {
  $.post({
    url: 'api/expenses',
    data: expense,
    success,
    error
  });
};

export const updateExpense = (expense, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `api/expenses/${expense.id}`,
    data: expense,
    success,
    error
  });
};

export const deleteExpense = (id, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `api/expenses/${id}`,
    success,
    error
  });
};
