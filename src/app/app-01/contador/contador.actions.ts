import {Action} from '@ngrx/store';

export enum CONTADOR_ACTIONS {
  INCREMENTAR = '[CONTADOR] Incrementar',
  DECREMENTAR = '[CONTADOR] Decrementar',
  DIVIDIR = '[CONTADOR] Dividir',
  MULTIPLICAR = '[CONTADOR] Multiplicar',
  RESET = '[CONTADOR] Reset',
}


export class IncrementarAction implements Action {
  readonly type = CONTADOR_ACTIONS.INCREMENTAR;

}

export class DecrementarAction implements Action {
  readonly type = CONTADOR_ACTIONS.DECREMENTAR;

}

export class MultiplicarAction implements Action {
  readonly type = CONTADOR_ACTIONS.MULTIPLICAR;

  constructor(public payload: number) {
  }

}

export class DividirAction implements Action {
  readonly type = CONTADOR_ACTIONS.DIVIDIR;

  constructor(public payload: number) {
  }

}

export class ResetAction implements Action {
  readonly type = CONTADOR_ACTIONS.RESET;
}

export type TYPE_ACTIONS =
  IncrementarAction
  | DecrementarAction
  | MultiplicarAction
  | DividirAction
  | ResetAction;
