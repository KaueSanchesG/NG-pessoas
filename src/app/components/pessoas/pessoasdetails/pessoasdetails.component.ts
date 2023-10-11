import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

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

  pessoaService = inject(PessoaService);

  constructor() {}

  ngOnInit() {
    if (this.pessoaInput) {
      this.pessoa = this.pessoaInput;
    }
  }

  save() {
    if (this.pessoa.nome.length !== 0 && this.pessoa.idade > 0) {
      this.pessoaService.save(this.pessoa).subscribe({
        next: (pessoa) => {
          this.retorno.emit(this.pessoa);
        },
        error: (erro) => {
          // QUANDO DÁ ERRO
          alert(
            'Exemplo de tratamento de erro/exception! Observe o erro no console!'
          );
          console.error(erro);
        },
      });
    } else {
      alert('Deve conter um nome e idade maior que 0');
    }
  }
}
