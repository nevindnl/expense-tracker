import React from 'react';
import {withRouter} from 'react-router';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const buttonContent = this.props.currentUser ? 'LOGOUT ' + this.props.currentUser.username : 'SIGN IN';
    const buttonClick = this.props.currentUser ? this.props.logout : () => this.props.router.push('/login');

    return (
      <div className='home'>
        <button id='sign_in' onClick={buttonClick}>{buttonContent}</button>
      </div>
    );
  }
}

export default withRouter(Home);
