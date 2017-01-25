import React from 'react';

class Expense extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datetime: `${this.props.expense.created_at.slice(0, 10)} ${this.props.expense.created_at.slice(11, 19)}`,
      amount: `\$${(this.props.expense.amount/100).toFixed(2)}`,
      description: this.props.expense.description
    };
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  edit(){
    let amount = this.state.amount[0] === '$' ? this.state.amount.slice(1) : this.state.amount;
    amount = amount.replace(",", "");

    if (!amount.match(/[^\d\.]/)) {
      this.props.updateExpense({
        expense: {
          id: this.props.expense.id,
          created_at: this.state.datetime,
          amount: parseFloat(amount) * 100,
          description: this.state.description
        }
      });
    }
  }

  delete(){
    this.props.deleteExpense(this.props.expense.id);
  }

  render(){
    if (this.props.currentUser.username === this.props.expense.user.username) {
      return (
        <tr className='expense'>
          <td>{this.props.expense.user.username}</td>
          <td><input type='text' placeholder='Datetime' value={this.state.datetime} onChange={this.update('datetime')}/></td>
          <td><input type='text' placeholder='Amount' value={this.state.amount} onChange={this.update('amount')}/></td>
          <td><input type='text' placeholder='Description' value={this.state.description} onChange={this.update('description')}/></td>
          <td>
            <button onClick={this.edit.bind(this)}>Edit</button>
            <button onClick={this.delete.bind(this)}>Delete</button>
            </td>
        </tr>
      );
    } else {
      return (
        <tr className='expense'>
          <td>{this.props.expense.user.username}</td>
          <td>{this.state.datetime}</td>
          <td>{this.state.amount}</td>
          <td>{this.state.description}</td>
        </tr>
      );
    }
  }
}

export default Expense;
