import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],
})
export class PessoasListComponent {
  list: Pessoa[] = [];
  pessoaSelecionada!: Pessoa;
  indiceSelecionado!: number;
  editing: boolean = false;

  modal = inject(NgbModal);
  modalRef: any;

  constructor() {
    this.list.push(new Pessoa('Kauê', 20));
    this.list.push(new Pessoa('Gustavo', 22));
    this.list.push(new Pessoa('Marcelo', 23));
    this.list.push(new Pessoa('Carlos', 30));
    this.list.push(new Pessoa('Pedro', 23));
  }

  openModal(abc: any) {
    this.modalRef = this.modal.open(abc, { size: 'lg' });
  }

  addToList(pessoa: Pessoa) {
    if (this.editing) {
      this.list[this.indiceSelecionado] = pessoa;
      this.editing = false;
    } else {
      this.list.push(pessoa);
    }
    this.modalRef.close();
  }

  update(index: number, abc: any) {
    this.pessoaSelecionada = this.list[index];
    this.indiceSelecionado = index;
    this.editing = true;
    this.openModal(abc);
  }
}
