import * as React from 'react';

class TodoItem extends React.Component<{todo: string}> {
  render(): JSX.Element {
    return (
      <li>
        <div className="view">
          <input type="text" className="toggle"/>
          <label>{this.props.todo}</label>
        </div>
        <button className="destroy" />
      </li>
    );
  }
}

export default TodoItem;
