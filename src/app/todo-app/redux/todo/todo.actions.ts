import {Action} from '@ngrx/store';

export enum TODO_ACTIONS {
  AGREGAR_TODO = '[Todo] Agregar todo',
  ELIMINAR_TODO = '[Todo] Eliminar todo',
  ELIMINAR_ALL = '[Todo] Eliminar All todos',
  TOGGLE_TODO = '[Todo] Toggle todo',
  EDIT_TODO = '[Todo] Edit todo',
  TOGGLE_ALL_TODO = '[Todo] Toggle All todo',
}

export class AgregarTodoAction implements Action {
  readonly type = TODO_ACTIONS.AGREGAR_TODO;

  constructor(public texto: string) {
  }

}

export class EliminarTodoAction implements Action {
  readonly type = TODO_ACTIONS.ELIMINAR_TODO;

  constructor(public id: number) {
  }

}

export class EditTodoAction implements Action {
  readonly type = TODO_ACTIONS.EDIT_TODO;

  constructor(public id: number, public texto: string) {
  }

}

export class ToggleTodoAction implements Action {
  readonly type = TODO_ACTIONS.TOGGLE_TODO;

  constructor(public id: number) {
  }

}


export class EliminarAllTodo implements Action {
  readonly type = TODO_ACTIONS.ELIMINAR_ALL;

}

export class ToggleAllTodo implements Action {
  readonly type = TODO_ACTIONS.TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {
  }

}


export type Acciones =
  AgregarTodoAction
  | EliminarTodoAction
  | EliminarAllTodo
  | EditTodoAction
  | ToggleAllTodo
  | ToggleTodoAction ;
