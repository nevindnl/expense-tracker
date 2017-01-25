import React from 'react';

import SearchExpense from '../search_expense/search_expense';

class SearchExpenses extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const els = this.props.expenses.map((expense, i) => (
      <SearchExpense week={expense.week} total={expense.total} key={i}/>
    ));

    return (
      <div>
        <table className='expenses'>
          <tbody>
            <tr>
              <th>Week</th>
              <th>Total</th>
            </tr>
            {els}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchExpenses;
