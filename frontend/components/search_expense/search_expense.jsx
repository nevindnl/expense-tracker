import React from 'react';

const SearchExpense = ({week, total}) => (
  <tr>
    <td>{week.slice(0, 10)}</td>
    <td>{(total/100).toFixed(2)}</td>
  </tr>
);

export default SearchExpense;
