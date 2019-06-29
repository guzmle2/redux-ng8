import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {App01Module} from './app-01.module';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    App01Module,
  ],
  exports: [RouterModule]
})
export class App01Routing {
}
