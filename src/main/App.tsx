import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { Todos } from './model';
import * as actions from '../actions/index';

import {
  Header,
  TodoList,
} from '../components';

interface AppProps {
  todos: Todos;
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => dispatch(actions.addTodo(text))}/>
        <TodoList todos={todos}/>
      </div>
    );
  }
}

const mapStateToProps = (state: {todos: Todos}) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
