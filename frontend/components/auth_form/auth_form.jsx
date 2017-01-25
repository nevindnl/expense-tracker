import React from 'react';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      admin: false
    };
  }

	componentDidUpdate(){
		if (this.props.currentUser){
      this.props.router.push('/');
    }
	}

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  toggleAdmin(){
    this.setState({admin: !this.state.admin});
  }

  signup(e){
    e.preventDefault();
    this.props.signup({user: this.state});
  }

  login(e){
    e.preventDefault();
    this.props.login({user: this.state});
  }

  render(){
    const errors = this.props.errors.map((error, i) => (
      <li key={i}>
        {error}
      </li>
    ));

    return (
      <div className='auth_form'>
        <button onClick={() => this.props.router.push('/')}>Back to Home</button>
        <ul className='errors'>{errors}</ul>
        <form>
          <input type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')}/>
          <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
          <input type='checkbox' checked={this.state.admin} onClick={this.toggleAdmin.bind(this)}/>
          <label>Admin</label>
					<button onClick={this.login.bind(this)}>Login</button>
          <button onClick={this.signup.bind(this)}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
