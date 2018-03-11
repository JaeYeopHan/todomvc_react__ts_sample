import * as React from 'react';
import autobind from 'autobind-decorator';

interface TodoTextInputProps {
  addTodo: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface TodoTextInputState {
  text: string;
}

class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {
  constructor(props: TodoTextInputProps, state: TodoTextInputState) {
    super(props, state);
    this.state = {
      text: this.props.text || '',
    };
  }

  @autobind
  // tslint:disable-next-line:no-any
  handleChange(e: any) {
    const target = e.target as HTMLInputElement;
    this.setState({ text: target.value });
  }

  @autobind
  // tslint:disable-next-line:no-any
  handleSubmit(e: any) {
    if (e.which === 13 && e.target.value.trim() !== '') {
      if (this.props.newTodo) {
        this.props.addTodo(e.target.value);
        this.setState({ text: '' });
      }
    }
  }

  render(): JSX.Element {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
