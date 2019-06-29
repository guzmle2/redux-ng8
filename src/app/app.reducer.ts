import {Todo} from './todo-app/redux/models/Todo';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todo-app/redux/todo/todo.reducer';
import {filterReducer} from './todo-app/redux/filter/filter.reducer';
import {FILTERS_VALID} from './todo-app/redux/filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: FILTERS_VALID;
}

export const AppReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
