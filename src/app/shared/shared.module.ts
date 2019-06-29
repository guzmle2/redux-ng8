import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterTodoPipe} from './filter-todo.pipe';

@NgModule({
  declarations: [FilterTodoPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FilterTodoPipe
  ]
})
export class SharedModule {
}
