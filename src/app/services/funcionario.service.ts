import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

 public findAll(): Observable<Funcionario[]>{
  return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
    catchError(error=>{
      alert("Erro ao buscar dados dos funcionários")
      console.error(error);
      return EMPTY;
    })
  )
 }

}
