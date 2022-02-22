import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indicacao } from 'src/app/shared/interfaces/indicacao';

@Injectable({
  providedIn: 'root'
})
export class IndicacoesService {

  constructor(private http: HttpClient) { }

  getIndicacoes(): Observable<any> {
    return this.http.get('https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes')
  }
  getIndicacao(id: string): Observable<any> {
    return this.http.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes/${id}`)
  }
  postIndicacao(indicacao: Indicacao): Observable<any> {
    return this.http.post('https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes', indicacao)
  }
  deleteIndicacao(id: string): Observable<any> {
    return this.http.delete(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes/${id}`)
  }
}
