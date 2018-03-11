import * as React from 'react';

import TodoTextInput from './TodoTextInput';

interface HeaderProps {
}

class Header extends React.Component<HeaderProps> {

  render(): JSX.Element {
    return(
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
