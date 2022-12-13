import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService,
    private storage: AngularFireStorage
  
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

public delete(id: number): Observable<Funcionario> {
  return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao excluir funcionário!");
      console.error(error);
      return EMPTY;
    })
  )
}

public adicionarImagem(img: File): Observable<any>{
  const promise = this.storage.upload(`fotos/${Date.now()}`, img);

  return from(promise).pipe(
    catchError(error => {
      this.toastr.error('Erro ao fazer upload da imagem');
      console.error(error);
      return EMPTY;
    })
  );
}

public deleteFoto(img: string): Observable<any>{
  const promise = this.storage.refFromURL(img).delete();

  return from(promise).pipe(
    catchError(error => {
      this.toastr.error("Erro deletarr a imagem.");
      console.error(error);
      return EMPTY;
    })
  );
}


}
