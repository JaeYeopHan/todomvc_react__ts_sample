import * as React from 'react';
import { Todo } from '../main/model';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
}

class TodoItem extends React.Component<TodoItemProps> {
  render(): JSX.Element {
    const { todo, deleteTodo, toggleTodo } = this.props;

    return (
      <li id={`${todo.id}`} className={todo.completed ? `completed` : ``}>
        <div className="view">
          <input
           className="toggle"
           type="checkbox"
           checked={todo.completed}
           onClick={() => toggleTodo(todo)}
          />
          <label>{todo.text}</label>
        </div>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo)}
        />
      </li>
    );
  }
}

export default TodoItem;
