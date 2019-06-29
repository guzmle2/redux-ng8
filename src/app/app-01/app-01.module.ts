import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {HijoComponent} from './contador/hijo/hijo.component';
import {NietoComponent} from './contador/nieto/nieto.component';

@NgModule({
  declarations: [
    MainComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class App01Module {
}
