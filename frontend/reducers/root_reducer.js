import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ExpensesReducer from './expenses_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  expenses: ExpensesReducer
});

export default RootReducer;
