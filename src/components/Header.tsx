import * as React from 'react';

import TodoTextInput from './TodoTextInput';
import autobind from 'autobind-decorator';

interface HeaderProps {
  addTodo: (text: string) => void;
}

class Header extends React.Component<HeaderProps> {
  @autobind
  addTodo(text: string) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render(): JSX.Element {
    return(
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          addTodo={this.addTodo}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
