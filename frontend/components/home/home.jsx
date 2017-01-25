import React from 'react';
import {withRouter} from 'react-router';

import Expenses from '../../expenses/expenses_container';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.requestExpenses();
    }
  }

  render(){
    const buttonContent = this.props.currentUser ? 'LOGOUT ' + this.props.currentUser.username : 'SIGN IN';
    const buttonClick = this.props.currentUser ? () => {this.props.logout(); this.props.router.push('/');} : () => this.props.router.push('/login');
    const expenses = this.props.currentUser ? <Expenses /> : null;
    
    return (
      <div className='home'>
        <button id='sign_in' onClick={buttonClick}>{buttonContent}</button>
        {expenses}
      </div>
    );
  }
}

export default Home;
