import { catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FuturoCandidato } from './../models/futuro-candidato';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService
  ) { }


public findAll(): Observable<FuturoCandidato[]> {
  return this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/candidatos`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao buscar dados dos candidatos");
      console.error(error);
      return EMPTY;
    })
  );
}

public findById(idFuturoCandidato: string): Observable<FuturoCandidato> {
  return this.http.get<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos/${idFuturoCandidato}`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao buscar dados dos candidatos");
      console.error(error);
      return EMPTY;
    })
  );
}

public delete(idFuturoCandidato: number): Observable<FuturoCandidato> {
  return this.http.delete<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos/${idFuturoCandidato}`).pipe(
    catchError(error => {
      this.toastr.error("Erro ao excluir cliente.");
      console.error(error);
      return EMPTY;
    })
  );
}
}
