import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../../types/type';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarContatosService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar() : Observable<Formulario[]> {
    return this.httpClient.get<Formulario[]>(`${this.apiUrl}/listar-contatos`);
  }

  obterContatos() {
    return this.listar;
  }
}
