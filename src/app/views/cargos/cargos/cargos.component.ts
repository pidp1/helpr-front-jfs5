import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['idCargo', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = []

  constructor(
    private cargoService: CargoService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initializeTableCargos()
  }

  public initializeTableCargos(): void{
    this.cargoService.findAll().subscribe(cargo => {
      this.dataSource = cargo;
    })
  }

  public delete(id: number): void{
    let ok= confirm("Tem certeza que deseja excluir?");
    if(ok){
      this.cargoService.delete(id).subscribe(()=>{
        this.toastr.success("Cargo excluido.");
        this.initializeTableCargos();
      })
    }
  }

}
