import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
