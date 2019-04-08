import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { showAllTodos, showCompleteTodos, showIncompleteTodos, addTodo, toggleTodo } from '../store/todo/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class TodoList extends React.Component<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.todos.map((todo, index) => (
          <ListItem key={index}>
            <Checkbox
              onClick={() => this.props.toggleTodo(todo.text)}
              checked={todo.isComplete}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    );
  }
}

type TodoListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

function mapStateToProps(state: AppState) {
  return {
    visibility: state.todo.visibility,
    todos: state.todo.todos
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    showAllTodos: () => dispatch(showAllTodos()),
    showCompleteTodos: () => dispatch(showCompleteTodos()),
    showIncompleteTodos: () => dispatch(showIncompleteTodos()),
    toggleTodo: (todoSearchText: string) => dispatch(toggleTodo(todoSearchText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
