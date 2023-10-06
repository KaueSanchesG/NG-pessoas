import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss'],
})
export class LivrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  livro: Livro = new Livro('', '');

  @Input() livroInput!: Livro;
  @Output() retorno = new EventEmitter<Livro>();

  constructor() {}

  ngOnInit() {
    if (this.livroInput) {
      this.livro = this.livroInput;
    }
  }

  save() {
    if (this.livro.autor.length != 0 && this.livro.titulo.length != 0) {
      this.retorno.emit(this.livro);
      this.livro = new Livro('', '');
    } else {
      alert('Deve conter um nome e um autor');
    }
  }
}
