import * as React from 'react';
import {
  Header,
  TodoList,
} from '../components';

class App extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
