import {Component, OnInit} from '@angular/core';
import {ToggleAllTodo} from '../redux/todo/todo.actions';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ngrx-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.scss']
})
export class MainTodoComponent implements OnInit {

  completado: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const action = new ToggleAllTodo(this.completado);
    this.store.dispatch(action);
  }

}
