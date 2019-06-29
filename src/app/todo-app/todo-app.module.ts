import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainTodoComponent} from './main-todo/main-todo.component';
import {FooterTodoComponent} from './footer-todo/footer-todo.component';
import {ListTodoComponent} from './list-todo/list-todo.component';
import {ItemTodoComponent} from './item-todo/item-todo.component';
import {AddTodoComponent} from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    MainTodoComponent,
    FooterTodoComponent,
    ListTodoComponent,
    ItemTodoComponent,
    AddTodoComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TodoAppModule {
}
