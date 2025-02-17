import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Formulario } from '../../types/type';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  adicionar() : Observable<Formulario[]> {
    return this.httpClient.get<Formulario[]>(`${this.apiUrl}/formulario`);
  }

}
