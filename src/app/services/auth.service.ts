import { API_CONFIG } from './../config/api.config';
import { Token } from './../models/token';
import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { PerfilFuncionario } from './../models/perfil-funcionario';
import { Funcionario } from './../models/funcionario';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService();

  public funcionarioJwt: PerfilFuncionario = {
    exp: "",
    perfil: "",
    sub: ""
  }

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    
    ) { }

  
  public authenticate(credenciais: Credenciais): Observable<Token> {
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken);

        let funcionarioJwt = this.jwt.decodeToken(token.accessToken);

        console.log(funcionarioJwt.sub);

      }),
      catchError(error => {
        this.toastr.error("Usuario ou senha incorretas", "Erro de Autenticação")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public isAuthenticate(): boolean {
    let flag: boolean = false;
    const token = localStorage.getItem("token");
    if(token) {
      flag = !this.jwt.isTokenExpired(token);
    }
    return flag;
  }

  public findByEmail(sub: string): Observable<Funcionario> {
    
let dadosUsuarios = this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/usuarios/email/${sub}`);

    return dadosUsuarios; //consertar



  }



}
