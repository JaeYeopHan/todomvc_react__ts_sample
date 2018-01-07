import { combineReducers } from 'redux';
import { todos } from '../reducers/index';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
