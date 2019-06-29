import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IContador} from '../contador/contador';
import {DecrementarAction, IncrementarAction} from '../contador/contador.actions';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  contador: number;
  state: any;

  constructor(private store: Store<IContador>) {

    // subscribo al estado completo
    this.store.subscribe((state) => this.state = state.contador);

    // subscribo unicamente solo la variable contador
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  ngOnInit() {
  }


  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
