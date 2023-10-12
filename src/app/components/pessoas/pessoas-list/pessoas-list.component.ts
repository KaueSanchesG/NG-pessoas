import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from './../../../services/pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],
})
export class PessoasListComponent {
  list: Pessoa[] = [];
  pessoaSelecionada: Pessoa = new Pessoa();
  indiceSelecionado!: number;

  modal = inject(NgbModal);
  pessoaService = inject(PessoaService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.pessoaService.listAll().subscribe({
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
    this.pessoaService.exemploErro().subscribe({
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
    this.pessoaSelecionada = new Pessoa();

    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, pessoa: Pessoa) {
    this.pessoaSelecionada = Object.assign({}, pessoa);

    this.modal.open(modal, { size: 'lg' });
  }

  addOuEditar(pessoa: Pessoa) {
    this.listAll();
    this.modal.dismissAll();
  }

  excluir(pessoa: Pessoa) {
    if (confirm('Deseja realmente excluir este carro?')) {
      this.pessoaService.delete(pessoa).subscribe(
        () => {
          this.listAll();
        },
        (error) => {
          console.error('Erro ao excluir o carro:', error);
        }
      );
    }
  }
}
