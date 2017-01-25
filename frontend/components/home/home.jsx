import React from 'react';
import {withRouter} from 'react-router';

import Expenses from '../expenses/expenses_container';
import Report from '../report/report_container';

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
    let buttonContent;
    let buttonClick;
    let content;
    if (this.props.currentUser) {
      buttonContent = 'LOGOUT '+ this.props.currentUser.username;
      buttonClick = () => {
        this.props.logout();
        this.props.router.push('/');
      };
      content = (
        <div>
          <h3>Expenses</h3>
          <Expenses />
          <h3>Report</h3>
          <Report />
        </div>
      );
    } else {
      buttonContent = 'SIGN IN';
      buttonClick = () => this.props.router.push('/login');
    }

    return (
      <div className='home'>
        <button id='sign_in' onClick={buttonClick}>{buttonContent}</button>
        {content}
      </div>
    );
  }
}

export default Home;
