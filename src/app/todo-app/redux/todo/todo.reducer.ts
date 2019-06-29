import {Acciones, TODO_ACTIONS} from './todo.actions';
import {Todo} from '../models/Todo';

const todo1 = new Todo('1 todo');
const todo2 = new Todo('2 todo');
const todo3 = new Todo('3 todo');
const stateInit: Todo[] = [
  todo1,
  todo2,
  todo3
];

export function todoReducer(state = stateInit, action: Acciones) {
  switch (action.type) {
    case TODO_ACTIONS.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [
        ...state,
        todo
      ];

    case TODO_ACTIONS.EDIT_TODO:
      return state.map(e => {
        if (e.id === action.id) {
          e.texto = action.texto;
        }
        return e;
      });

    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map(e => {
        if (e.id === action.id) {
          e.completado = !e.completado;
        }
        return e;
      });

    case TODO_ACTIONS.TOGGLE_ALL_TODO:
      return state.map(e => {
        e.completado = action.completado;
        return e;
      });

    case TODO_ACTIONS.ELIMINAR_ALL:
      return state.filter((e: Todo) => !e.completado);


    case TODO_ACTIONS.ELIMINAR_TODO:
      return state.filter((e: Todo) => e.id !== action.id);

    default:
      return state;
  }
}
