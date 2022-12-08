import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'cargo', 'foto', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.initializeTableFuncionarios();
  }

  public initializeTableFuncionarios(): void{
    this.funcionarioService.findAll().subscribe( funcionario => {
      this.dataSource = funcionario;
    });
  }

  public delete(id: number) {
    this.funcionarioService.delete(id).subscribe(
      ()=> {this.initializeTableFuncionarios()}
      
    )
  }

}
