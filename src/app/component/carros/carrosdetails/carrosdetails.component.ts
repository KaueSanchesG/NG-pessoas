import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'],
})
export class CarrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  carro: Carro = new Carro('', 0);

  @Input() carroInput!: Carro;
  @Output() retorno = new EventEmitter<Carro>();

  constructor() {}

  ngOnInit() {
    if (this.carroInput) {
      this.carro = this.carroInput;
    }
  }
  save() {
    if (this.carro.nome.length !== 0 && this.carro.ano > 0) {
      this.retorno.emit(this.carro);
      this.carro = new Carro('', 0);
    } else {
      alert('Deve conter um nome e um ano maior que 0');
    }
  }
}
