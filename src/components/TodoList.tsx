import * as React from 'react';

import TodoItem from './TodoItem';
import Footer from './Footer';
import { Todo, Todos } from '../main/model';

interface TodoListProps {
  todos: Todos;
  deleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo, newText: string) => void;
  toggleTodo: (todo: Todo) => void;
}

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
