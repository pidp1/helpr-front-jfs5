import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = []

  constructor(
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {
    this.initializeTableCargos()
  }

  public initializeTableCargos(): void{
    this.cargoService.findAll().subscribe(cargo => {
      this.dataSource = cargo;
    })
  }

}
