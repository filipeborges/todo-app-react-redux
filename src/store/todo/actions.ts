import {
  VISIBILITY_ACTION,
  IVisibilityAction,
  TODO_ACTION,
  ITodoAction
} from './types';

export function showAllTodos(): IVisibilityAction {
  return {
    type: VISIBILITY_ACTION.SHOW_ALL_TODOS
  };
}

export function showCompleteTodos(): IVisibilityAction {
  return {
    type: VISIBILITY_ACTION.SHOW_COMPLETE_TODOS
  };
}

export function showIncompleteTodos(): IVisibilityAction {
  return {
    type: VISIBILITY_ACTION.SHOW_INCOMPLETE_TODOS
  };
}

export function addTodo(todoText: string): ITodoAction {
  return {
    type: TODO_ACTION.ADD_TODO,
    text: todoText
  };
}

export function toggleTodo(todoSearchText: string): ITodoAction {
  return {
    type: TODO_ACTION.TOGGLE_COMPLETE,
    text: todoSearchText
  }
}
