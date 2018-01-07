import * as React from 'react';

class TodoTextInput extends React.Component {
  render(): JSX.Element {
    return (
      <input
        type="text"
        className="new-todo"
      />
    );
  }
}

export default TodoTextInput;
