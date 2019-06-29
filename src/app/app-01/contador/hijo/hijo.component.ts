import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DividirAction, MultiplicarAction} from '../contador.actions';
import {IContador} from '../contador';

@Component({
  selector: 'ngrx-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(protected store: Store<IContador>) {
  }

  ngOnInit() {
    this.store.select('contador').subscribe(e => this.contador = e);
  }

  multiplicar() {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }
}
