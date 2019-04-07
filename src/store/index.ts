import { createStore, combineReducers } from 'redux';
import { todoRootReducer } from './todo/reducers';

const rootReducer = combineReducers({
  todo: todoRootReducer
});

export const appStore = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
