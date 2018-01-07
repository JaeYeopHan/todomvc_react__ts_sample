import * as React from 'react';

import TodoItem from './TodoItem';
import Footer from './Footer';

class TodoList extends React.Component {
  render(): JSX.Element {
    return (
      <section className="main">
        <ul className="todo-list">
          <TodoItem todo={`Study TypeScript`} />
          <TodoItem todo={`Study React`} />
          <TodoItem todo={`Study Redux`} />
        </ul>
        <Footer />
      </section>
    );
  }
}

export default TodoList;
