import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';



@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService,
    ) { }

public findAll(): Observable<Funcionario[]>{
  return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
    catchError(error=>{
      this.toastr.error("Erro ao buscar dados dos funcionários")
      console.error(error);
      return EMPTY;
    })
  )
}

public save(funcionario: Funcionario): Observable<Funcionario> {
  return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, funcionario).pipe(
    catchError(error => {
      this.toastr.error('Erro ao cadastrar funcionário!')
      console.error(error)
      return EMPTY
    })
  )
}

public findById(id: string): Observable<Funcionario> {
  return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao buscar funcionário por id!");
      console.error(error);
      return EMPTY;
    })
  )
}

public update(funcionario: Funcionario): Observable<Funcionario> {
  const funcionarioDTO = {
    nome: funcionario.nome,
    email: funcionario.email,
    cpf: funcionario.cpf,
    senha: funcionario.senha,
    foto: funcionario.foto,
    idCargo: funcionario.cargo.idCargo
  } 
  
  return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`, funcionarioDTO).pipe(
    catchError(error => {
      this.toastr.error("Erro ao atualizar funcionário!");
      console.error(error);
      return EMPTY;
    })
  )

}


public delete(id: number): Observable<Funcionario> {
  return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao excluir funcionário!");
      console.error(error);
      return EMPTY;
    })
  )
}
}
