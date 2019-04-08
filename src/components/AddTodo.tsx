import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodo } from'../store/todo/actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = {
      todoText: ''
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    if (this.state.todoText.length > 0) {
      this.props.addTodo(this.state.todoText);
      this.setState({todoText: ''});
    }
  }

  render() {
    return (
      <div>
        <TextField
          label={'Todo text...'}
          value={this.state.todoText}
          onChange={(e) => this.setState({todoText: e.target.value})}
        />
        <Button
          onClick={this.handleAddTodo}
          variant="contained"
          color="primary"
        >
          Adicionar
        </Button>
      </div>
    );
  }
}

interface AddTodoState {
  todoText: string;
}

type AddTodoProps = ReturnType<typeof mapDispatchToProps>;

function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: (todoText: string) => dispatch(addTodo(todoText))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)