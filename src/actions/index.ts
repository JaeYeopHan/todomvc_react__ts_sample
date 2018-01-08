import * as types from './ActionTypes';
import { Todo } from '../main/model';

export const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  payload: { todo: { completed: false, text } },
});

export const deleteTodo = (todo: Todo) => ({
  type: types.DELETE_TODO,
  payload: { todo },
});

export const editTodo = (todo: Todo, newText: string) => ({
  type: types.EDIT_TODO,
  payload: { ...todo, text: newText },
});

export const toggleTodo = (todo: Todo) => ({
  type: types.TOGGLE_TODO,
  payload: { todo },
});
