import {Action} from '@ngrx/store';

export enum FILTER_ACTIONS {
  SET_FILTER = '[Filter] Set Filter',
}

export enum FILTERS_VALID {
  TODOS = 'Todos',
  COMPLETADOS = 'Completados',
  PENDIENTES = 'Pendientes',
}

export class SetFilterAction implements Action {
  readonly type = FILTER_ACTIONS.SET_FILTER;

  constructor(public filtro: FILTERS_VALID) {
  }

}

export type AccionesFiltro = SetFilterAction ;
