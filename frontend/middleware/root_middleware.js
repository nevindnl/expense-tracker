import {applyMiddleware} from 'redux';

import SessionMiddleware from './session_middleware';
import ExpensesMiddleware from './expenses_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpensesMiddleware
);

export default RootMiddleware;
