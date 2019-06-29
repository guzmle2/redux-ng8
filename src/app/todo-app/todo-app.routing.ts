import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoAppModule} from './todo-app.module';
import {MainTodoComponent} from './main-todo/main-todo.component';

const routes: Routes = [
  {
    path: '',
    component: MainTodoComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TodoAppModule,
  ],
  exports: [RouterModule]
})
export class TodoAppRouting {
}
