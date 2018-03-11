import { observable, action } from 'mobx';
import { Todo } from '../main/model';

export class TodoStore {
  @observable public todos: Todo[] = [
    { id: 0, text: 'test0', completed: false },
    { id: 1, text: 'test1', completed: false },
  ];

  @action public addtodo = (text: string): void => {
    this.todos.push({
      id: this.todos.length,
      text,
      completed: false,
    });
  }
}

export default new TodoStore();
