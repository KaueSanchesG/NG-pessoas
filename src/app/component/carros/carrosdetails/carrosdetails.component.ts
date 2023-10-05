import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'],
})
export class CarrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  carro!: Carro;
  mensagem: string = '';

  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvarCarro() {
    this.mensagem = 'Carro salvo com sucesso!';
  }
}
