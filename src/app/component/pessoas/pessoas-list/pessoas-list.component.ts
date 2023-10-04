import { Component } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],
})
export class PessoasListComponent {
  list: Pessoa[] = [];

  constructor() {
    this.list.push(new Pessoa('Kauê', 20));
    this.list.push(new Pessoa('Gustavo', 22));
    this.list.push(new Pessoa('Marcelo', 23));
    this.list.push(new Pessoa('Carlos', 30));
    this.list.push(new Pessoa('Pedro', 23));
    this.list.push(new Pessoa('Simão', 50));
    this.list.push(new Pessoa('Astolfo', 60));
    this.list.push(new Pessoa('Romeu', 55));
    this.list.push(new Pessoa('Jade', 32));
    this.list.push(new Pessoa('Junior', 27));
    this.list.push(new Pessoa('Lucas', 12));
  }
}
