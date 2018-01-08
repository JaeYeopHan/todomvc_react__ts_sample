import * as types from '../actions/ActionTypes';
import { Todo, Todos } from '../main/model';

const initialState: Todos = [
  {
    id: 0,
    text: 'Study RxJS',
    completed: false,
  } as Todo
];

interface Action {
  type: string;
  payload: { todo: Todo };
}

function todos(state: Todos = initialState, { type, payload }: Action): Todos {
  switch (type) {
    case types.ADD_TODO: 
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: payload.todo.text,
        completed: payload.todo.completed,
      }, ...state];

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== payload.todo.id);

    case types.TOGGLE_TODO:
      return state.map(todo => todo.id === payload.todo.id ? { ...todo, completed: !todo.completed } : todo);

    default:
      return state;
  }
}

export default todos;
