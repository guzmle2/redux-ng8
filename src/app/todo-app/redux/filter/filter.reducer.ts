import {AccionesFiltro, FILTER_ACTIONS, FILTERS_VALID} from './filter.actions';

const stateInit: FILTERS_VALID = FILTERS_VALID.TODOS;

export function filterReducer(state = stateInit, action: AccionesFiltro) {
  switch (action.type) {
    case FILTER_ACTIONS.SET_FILTER:
      return action.filtro;


    default:
      return state;
  }
}
