import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  @Input() colunas: string[] = [];
  @Input() dados: any[] = [];
  @Output() editarLinhaClick = new EventEmitter<number>();

  indiceAtual: number = 0;

  incrementarIndice() {
    this.indiceAtual++;
  }
}
