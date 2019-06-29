import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Todo} from '../redux/models/Todo';
import {FILTERS_VALID} from '../redux/filter/filter.actions';

@Component({
  selector: 'ngrx-list-todo',
  templateUrl: './list-todo.component.html',
  styles: []
})
export class ListTodoComponent implements OnInit {

  todos: Todo[] = [];
  filtersCurrent: FILTERS_VALID;

  constructor(protected store: Store<AppState>) {
    this.store.select('todos').subscribe(e => this.todos = e);
    this.store.select('filter').subscribe(e => this.filtersCurrent = e);
  }

  ngOnInit() {
  }

}
