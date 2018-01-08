import * as types from '../actions/ActionTypes';
import { Todo, Todos } from '../main/model';
import { Action } from '../actions/index';

const initialState: Todos = [
  {
    id: 0,
    text: 'Study RxJS',
    completed: false,
  } as Todo
];

function todos(state: Todos = initialState, action: Action) {
  switch (action.type) {
    case types.ADD_TODO: 
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload.text,
        completed: action.payload.completed,
      }, ...state];

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case types.TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo);

    default:
      return state;
  }
}

export default todos;
