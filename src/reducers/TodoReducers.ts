import * as types from '../actions/ActionTypes';
import { Todo, Todos } from '../main/model';

const initialState: Todos = [
  {
    id: 0,
    text: 'Study RxJS',
    completed: false,
  } as Todo
];

function todos(state: Todos = initialState, action: {type: string, payload: Todo}) {
  switch (action.type) {
    case types.ADD_TODO: 
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload.text,
        completed: action.payload.completed,
      }, ...state];
    default:
      return state;
  }
}

export default todos;
