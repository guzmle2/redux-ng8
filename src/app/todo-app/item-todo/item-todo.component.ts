import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../redux/models/Todo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {EditTodoAction, EliminarTodoAction, ToggleTodoAction} from '../redux/todo/todo.actions';

@Component({
  selector: 'ngrx-item-todo',
  templateUrl: './item-todo.component.html',
  styles: []
})
export class ItemTodoComponent implements OnInit {

  @Input() todo: Todo;

  @ViewChild('txtInputFisico', {static: true}) txtInput: ElementRef;

  form: FormGroup;
  editing: boolean;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.instanceForm(this.todo);
  }

  instanceForm(obj: Todo = null) {
    this.form = this.fb.group({
      id: [obj.id],
      texto: [
        obj ? obj.texto : '',
        Validators.required
      ],
      completado: [obj.completado]
    });

    this.form.controls.completado.valueChanges.subscribe(e => {
        const action = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
      }
    );
  }

  editando() {
    this.editing = true;
    setTimeout(() => this.txtInput.nativeElement.select());
  }

  finishEdit() {
    const newValue = this.form.controls.texto.value;
    if (this.form.valid && this.todo.texto !== newValue) {
      const action = new EditTodoAction(this.todo.id, newValue);
      this.store.dispatch(action);
    }
    this.editing = false;
  }

  deleteItem() {
    const action = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
