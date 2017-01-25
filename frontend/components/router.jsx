import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Home from './home/home_container';
import AuthForm from './auth_form/auth_form_container';

import {requestExpenses} from '../actions/expenses_actions';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
	    <Router history={hashHistory}>
	      <Route path='/' component={App}>
          <IndexRoute component={Home} />
					<Route path='/login' component={AuthForm} />
	      </Route>
	    </Router>
	  );
	}
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
