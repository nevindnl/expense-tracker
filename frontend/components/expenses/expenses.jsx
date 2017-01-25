import React from 'react';

import Expense from '../expense/expense_container';

class Expenses extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datetime: '',
      amount: 0.00,
      description: ''
    };
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  add(){
    this.props.createExpense({
      expense: {
        created_at: this.state.datetime,
        amount: parseFloat(this.state.amount) * 100,
        description: this.state.description
      }
    });
    this.setState({
      datetime: '',
      amount: '',
      description: ''
    });
  }

  render(){
    const els = this.props.expenses.map(expense => (
      <Expense expense={expense} key={expense.id}/>
    ));
    const errors = this.props.errors.map((error, i) => (
      <li key={i}>
        {error}
      </li>
    ));

    return (
      <div>
        <ul className='errors'>{errors}</ul>
        <table className='expenses'>
          <tbody>
            <tr>
              <th>User</th>
              <th>Datetime</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
            {els}
            <tr>
              <td>{this.props.currentUser.username}</td>
              <td><input type='datetime-local' value={this.state.datetime} onChange={this.update('datetime')}/></td>
              <td><input type='number' step='0.01' placeholder='Amount' value={this.state.amount} onChange={this.update('amount')}/></td>
              <td><input type='text' placeholder='Description' value={this.state.description} onChange={this.update('description')}/></td>
              <td><button onClick={this.add.bind(this)}>Add</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Expenses;
