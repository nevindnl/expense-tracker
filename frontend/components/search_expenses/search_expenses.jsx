import React from 'react';

import Expense from '../expense/expense_container';

class SearchExpenses extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const els = this.props.expenses.map(expense => (
      <Expense expense={expense} key={expense.id}/>
    ));

    return (
      <div>
        <table className='expenses'>
          <tbody>
            <tr>
              <th>User</th>
              <th>Datetime</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
            {els}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchExpenses;
