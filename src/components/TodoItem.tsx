import * as React from 'react';
import { Todo } from '../main/model';

class TodoItem extends React.Component<{todo: Todo}> {
  render(): JSX.Element {
    const { todo } = this.props;

    return (
      <li id={`${todo.id}`}>
        <div className="view">
          <input
           className="toggle"
           type="checkbox"
           checked={todo.completed}
          />
          <label>{todo.text}</label>
        </div>
        <button className="destroy" />
      </li>
    );
  }
}

export default TodoItem;
