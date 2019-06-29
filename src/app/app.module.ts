import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {AppReducer} from './app.reducer';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production
    })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
