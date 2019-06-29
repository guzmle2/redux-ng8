import {Component, OnInit} from '@angular/core';
import {IContador} from '../contador';
import {Store} from '@ngrx/store';
import {ResetAction} from '../contador.actions';

@Component({
  selector: 'ngrx-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(protected store: Store<IContador>) {
    this.store.select('contador').subscribe(e => this.contador = e);
  }

  ngOnInit() {
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
