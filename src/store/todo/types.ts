export interface IVisibilityAction {
  type: string;
}

export const VISIBILITY_ACTION = {
  SHOW_ALL_TODOS: 'SHOW_ALL_TODOS',
  SHOW_COMPLETE_TODOS: 'SHOW_COMPLETE_TODOS',
  SHOW_INCOMPLETE_TODOS: 'SHOW_INCOMPLETE_TODOS'
};

export interface ITodo {
  text: string;
  isComplete: boolean;
}

export interface ITodoAction {
  type: string;
  text: string;
}

export const TODO_ACTION = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETE: 'TOGGLE_COMPLETE'
}
