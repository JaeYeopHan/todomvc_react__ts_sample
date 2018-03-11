import { observable } from 'mobx';
import { Todo } from '../main/model';

export class TodoStore {
  @observable public todos: Todo[] = [
    { id: 0, text: 'test0', completed: false },
    { id: 1, text: 'test1', completed: false },
  ];
}

export default new TodoStore();
