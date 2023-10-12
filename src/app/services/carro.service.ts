import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Carro } from '../models/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/erro');
  }

  delete(carro: Carro): Observable<Carro> {
    const url = `${this.API}/${carro.id}`;
    return this.http.delete<Carro>(url);
  }
}
