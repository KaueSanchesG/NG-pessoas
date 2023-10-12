import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss'],
})
export class LivrosdetailsComponent {
  @Input() livro!: Livro;
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivroService);

  constructor() {}

  save() {
    this.livroService.save(this.livro).subscribe({
      next: (livro) => {
        this.retorno.emit(livro);
      },
      error: (erro) => {
        alert(
          'Exemplo de tratamento de erro/exception! Observe o erro no console!'
        );
        console.log(erro);
      },
    });
  }
}
