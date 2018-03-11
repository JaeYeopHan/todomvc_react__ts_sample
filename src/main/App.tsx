import * as React from 'react';
import { observer, inject } from 'mobx-react';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { TodoStore } from '../stores/todoStore';

interface AppProps {
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class App extends React.Component<AppProps> {
  render() {
    const store = this.props.todoStore as TodoStore;
    return (
      <div className="todoapp">
        <Header />
        <TodoList todos={store.todos}/>
      </div>
    );
  }
}

export default App;
