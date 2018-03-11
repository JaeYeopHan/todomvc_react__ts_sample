import * as React from 'react';

import TodoItem from './TodoItem';
import Footer from './Footer';
import { Todos } from '../main/model';
import { observer } from 'mobx-react';

interface TodoListProps {
  todos: Todos;
}

@observer
class TodoList extends React.Component<TodoListProps> {
  render(): JSX.Element {
    const { todos } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
        <Footer />
      </section>
    );
  }
}

export default TodoList;
