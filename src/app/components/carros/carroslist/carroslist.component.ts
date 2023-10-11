import { Component, inject } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent {
  list: Carro[] = [];
  carroSelecionado!: Carro;
  indiceSelecionado!: number;
  editing: boolean = false;

  modal = inject(NgbModal);
  modalRef: any;

  constructor() {
    let camaro: Carro = new Carro('Camaro', 2022);
    let fusca: Carro = new Carro('Fusca', 2000);
    let kombi: Carro = new Carro('Kombi', 1997);

    this.list.push(camaro, fusca, kombi);
  }

  openModal(abc: any) {
    this.modalRef = this.modal.open(abc, { size: 'lg' });
  }

  addToList(carro: Carro) {
    if (this.editing) {
      this.list[this.indiceSelecionado] = carro;
      this.editing = false;
    } else {
      this.list.push(carro);
    }
    this.modalRef.close();
  }

  update(index: number, abc: any) {
    this.carroSelecionado = this.list[index];
    this.indiceSelecionado = index;
    this.editing = true;
    this.openModal(abc);
  }
}
