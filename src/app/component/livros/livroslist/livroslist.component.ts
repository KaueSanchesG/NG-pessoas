import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss'],
})
export class LivroslistComponent {
  list: Livro[] = [];
  livroSelecionado!: Livro;
  indiceSelecionado!: number;
  editing: boolean = false;

  modal = inject(NgbModal);
  modalRef: any;

  constructor() {
    let livro1: Livro = new Livro('Dom Casmurro', 'Machado de assis');
    let livro2: Livro = new Livro('O alienista', 'Machado de assis');
    let livro3: Livro = new Livro('O corvo', 'Machado de assis');
    let livro4: Livro = new Livro('O quinze', 'Rachel de Queiroz');

    this.list.push(livro1, livro2, livro3, livro4);
  }

  openModal(abc: any) {
    this.modalRef = this.modal.open(abc, { size: 'lg' });
  }

  addToList(livro: Livro) {
    if (this.editing) {
      this.list[this.indiceSelecionado] = livro;
      this.editing = false;
    } else {
      this.list.push(livro);
    }
    this.modalRef.close();
  }

  update(index: number, abc: any) {
    this.livroSelecionado = this.list[index];
    this.indiceSelecionado = index;
    this.editing = true;
    this.openModal(abc);
  }
}
