import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {AgregarTodoAction} from '../redux/todo/todo.actions';

@Component({
  selector: 'ngrx-add-todo',
  templateUrl: './add-todo.component.html',
  styles: []
})
export class AddTodoComponent implements OnInit {

  txtInput: FormControl;
  @ViewChild('txtInputFisico', {static: true}) txt: ElementRef;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo() {

    if (this.txtInput.valid) {
      const action = new AgregarTodoAction(this.txtInput.value);
      this.store.dispatch(action);
      setTimeout(() => this.txt.nativeElement.select());

    }
  }
}
