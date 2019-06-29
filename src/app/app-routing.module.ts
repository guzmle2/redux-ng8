import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {App01Routing} from './app-01/app-01.routing';
import {TodoAppRouting} from './todo-app/todo-app.routing';


const routes: Routes = [
  {
    path: 'app-01',
    loadChildren: () => App01Routing
  },
  {
    path: '',
    loadChildren: () => TodoAppRouting
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
