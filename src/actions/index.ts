import * as types from './ActionTypes';

export const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  payload: {
    completed: false,
    text
  },
});
