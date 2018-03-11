import * as React from 'react';

import { Todos } from './model';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

export default class App extends React.Component<{}> {
  private todos: Todos = [
    {
      id: 0,
      text: 'test',
      completed: false,
    }
  ];
  render() {
    return (
      <div className="todoapp">
        <Header />
        <TodoList todos={this.todos}/>
      </div>
    );
  }
}
