import { combineReducers } from 'redux';
import {
  VISIBILITY_ACTION,
  IVisibilityAction,
  ITodo,
  ITodoAction,
  TODO_ACTION
} from './types';

const initialVisibility = VISIBILITY_ACTION.SHOW_ALL_TODOS;

function visibilityReducer(state = initialVisibility, action: IVisibilityAction) {
  switch (action.type) {
    case VISIBILITY_ACTION.SHOW_ALL_TODOS:
      return VISIBILITY_ACTION.SHOW_ALL_TODOS;
    case VISIBILITY_ACTION.SHOW_COMPLETE_TODOS:
      return VISIBILITY_ACTION.SHOW_COMPLETE_TODOS;
    case VISIBILITY_ACTION.SHOW_INCOMPLETE_TODOS:
      return VISIBILITY_ACTION.SHOW_INCOMPLETE_TODOS;
    default:
      return state;
  }
}

const initialTodos: ITodo[] = [];

function todoReducer(state = initialTodos, action: ITodoAction): ITodo[] {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          isComplete: false
        }
      ];
    case TODO_ACTION.TOGGLE_COMPLETE:
      return toggleTodoComplete(state, action.text);
    default:
      return state;
  }
}

function toggleTodoComplete(allTodos: ITodo[], todoSearchText: string) {
  return allTodos.map(todo => {
    if (todo.text === todoSearchText) {
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
}

export const todoRootReducer = combineReducers({
  visibility: visibilityReducer,
  todos: todoReducer
});
