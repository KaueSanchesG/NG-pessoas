import { Component, inject } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent {
  list: Carro[] = [];
  carroSelecionado: Carro = new Carro();
  indiceSelecionado!: number;

  modal = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.carroService.listAll().subscribe({
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
    this.carroService.exemploErro().subscribe({
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
    this.carroSelecionado = new Carro();

    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, carro: Carro, indice: number) {
    this.carroSelecionado = Object.assign({}, carro);
    this.indiceSelecionado = indice;

    this.modal.open(modal, { size: 'lg' });
  }

  addOuEditar(carro: Carro) {
    this.listAll();
    this.modal.dismissAll();
  }
}
