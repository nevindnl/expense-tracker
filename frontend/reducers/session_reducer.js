import {SessionActions} from '../actions/session_actions';
import {merge} from 'lodash';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case SessionActions.RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
			newState.errors = [];
      return newState;
    case SessionActions.RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case SessionActions.LOGOUT:
      newState.currentUser = null;
			newState.errors = [];
      return newState;
    case SessionActions.CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
