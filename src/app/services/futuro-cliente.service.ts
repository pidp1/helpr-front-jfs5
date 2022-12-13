import { catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FuturoClienteService {

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService
    ) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/clientes/futurocliente`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados de clientes");
        console.error(error);
        return EMPTY;
      })
    );
  }
  
  public delete(id: number): Observable<FuturoCliente> {
    return this.http.delete<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futurocliente/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao excluir cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<FuturoCliente> {
    return this.http.get<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futurocliente/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados de cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(futuroCliente: FuturoCliente): Observable<FuturoCliente> {
    return this.http.put<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futurocliente/${futuroCliente.id}`, futuroCliente).pipe(
      catchError(error => {
        this.toastr.error("Erro ao editar cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public create(futuroCliente: FuturoCliente): Observable<FuturoCliente> {
    return this.http.post<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futurocliente`, futuroCliente).pipe(
      catchError(error => {
        this.toastr.error("Erro ao criar novo cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
