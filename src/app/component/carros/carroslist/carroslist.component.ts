import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent {
  list: Carro[] = [];

  constructor() {
    let camaro: Carro = new Carro('Camaro', 2022);
    let fusca: Carro = new Carro('Fusca', 2000);
    let kombi: Carro = new Carro('Kombi', 1997);

    this.list.push(camaro, fusca, kombi);
  }
}
