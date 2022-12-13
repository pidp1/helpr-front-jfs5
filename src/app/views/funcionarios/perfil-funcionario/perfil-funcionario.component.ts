import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credenciais } from './../../../models/credenciais';
import { Funcionario } from './../../../models/funcionario';
import { Cargo } from './../../../models/cargo';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { PerfilFuncionario } from './../../../models/perfil-funcionario';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-perfil-funcionario',
  templateUrl: './perfil-funcionario.component.html',
  styleUrls: ['./perfil-funcionario.component.css']
})


export class PerfilFuncionarioComponent implements OnInit {

public perfilFuncionario: Funcionario = {
    nome: "",
    email: " ",
    cpf: "",
    senha: "",
    perfil: "",
    foto: "",
}



  constructor(
    public http: HttpClient,
    public authService: AuthService,
    public router: Router
    ) { }

    private perfilJwt: string = this.authService.funcionarioJwt.sub


  ngOnInit(): void {
    this.iniciarPerfil();
  }

private iniciarPerfil(): void {
  const perfilFuncionario = this.authService.findByEmail(this.perfilJwt).subscribe(
    (dados) => console.log(dados)
  )

  console.log(perfilFuncionario)
  console.log(this.perfilJwt)

}

}
