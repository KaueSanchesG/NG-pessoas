import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from './../../../models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss'],
})
export class LivroslistComponent {
  list: Livro[] = [];
  livroSelecionado: Livro = new Livro();
  indiceSelecionado!: number;

  modal = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.livroService.listAll().subscribe({
      next: (list) => {
        this.list = list;
      },
      error: (erro) => {
        alert(
          'Exemplo de tratamento de erro/exception! Observe o erro no console!'
        );
        console.log(erro);
      },
    });
  }

  exemploErro() {
    this.livroService.exemploErro().subscribe({
      next: (list) => {
        // QUANDO DÁ CERTO
        this.list = list;
      },
      error: (erro) => {
        // QUANDO DÁ ERRO
        alert(
          'Exemplo de tratamento de erro/exception! Observe o erro no console!'
        );
        console.error(erro);
      },
    });
  }

  adicionar(modal: any) {
    this.livroSelecionado = new Livro();

    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.livroSelecionado = Object.assign({}, livro);
    this.indiceSelecionado = indice;

    this.modal.open(modal, { size: 'lg' });
  }

  addOuEditar(livro: Livro) {
    this.listAll();
    this.modal.dismissAll();
  }
}
