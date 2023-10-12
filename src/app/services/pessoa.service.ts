import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }

  exemploErro(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + '/erro');
  }

  delete(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.API}/${pessoa.id}`;
    return this.http.delete<Pessoa>(url);
  }
}
