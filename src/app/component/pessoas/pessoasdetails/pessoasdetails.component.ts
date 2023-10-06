import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss'],
})
export class PessoasdetailsComponent {
  roteador = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa('', 0);

  @Input() pessoaInput!: Pessoa;
  @Output() retorno = new EventEmitter<Pessoa>();

  constructor() {}

  ngOnInit() {
    if (this.pessoaInput) {
      this.pessoa = this.pessoaInput;
    }
  }

  save() {
    if (this.pessoa.nome.length !== 0 && this.pessoa.idade > 0) {
      this.retorno.emit(this.pessoa);
      this.pessoa = new Pessoa('', 0); // Limpar o objeto após salvar
    } else {
      alert('Deve conter um nome e idade maior que 0');
    }
  }
}
