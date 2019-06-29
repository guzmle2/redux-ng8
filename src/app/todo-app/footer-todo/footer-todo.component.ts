import {Component, OnInit} from '@angular/core';
import {FILTERS_VALID, SetFilterAction} from '../redux/filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Todo} from '../redux/models/Todo';
import {EliminarAllTodo} from '../redux/todo/todo.actions';

@Component({
  selector: 'ngrx-footer-todo',
  templateUrl: './footer-todo.component.html',
  styles: []
})
export class FooterTodoComponent implements OnInit {

  filtersValid = Object.values(FILTERS_VALID);
  filterCurrent: FILTERS_VALID;
  todoPendientes: number;

  constructor(private store: Store<AppState>) {
    this.store.select('filter').subscribe(e => this.filterCurrent = e);
    this.store.select('todos').subscribe(e => this.todoPendientes = e.filter((h: Todo) => !h.completado).length);
  }

  ngOnInit() {

  }

  updateFilter(its: FILTERS_VALID) {
    const accion = new SetFilterAction(its);
    this.store.dispatch(accion);
  }

  deleteAll() {
    const accion = new EliminarAllTodo();
    this.store.dispatch(accion);
  }
}
