import {CONTADOR_ACTIONS, TYPE_ACTIONS} from './contador.actions';

export function contadorReducer(state: number = 10, action: TYPE_ACTIONS) {
  switch (action.type) {

    case CONTADOR_ACTIONS.INCREMENTAR:
      return state += 1;

    case CONTADOR_ACTIONS.DECREMENTAR:
      return state -= 1;

    case CONTADOR_ACTIONS.DIVIDIR:
      return state /= action.payload;

    case CONTADOR_ACTIONS.MULTIPLICAR:
      return state *= action.payload;

    case CONTADOR_ACTIONS.RESET:
      return state = 0;

    default:
      return state;
  }

}
