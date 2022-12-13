import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FuturoClienteService } from './../../../services/futuro-cliente.service';
import { FuturoCliente } from './../../../models/futuro-cliente';

@Component({
  selector: 'app-fututo-cliente',
  templateUrl: './fututo-cliente.component.html',
  styleUrls: ['./fututo-cliente.component.css']
})
export class FututoClienteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'tel', 'editar', 'excluir'];
  dataSource: FuturoCliente[] = [];

  constructor(
    private futuroClienteService: FuturoClienteService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroClienteService.findAll().subscribe(futuroCliente => {
      this.dataSource = futuroCliente;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futuroClienteService.delete(id).subscribe(() => {
        this.toastr.success("Futuro cliente excluido.");
        this.initializeTable();
      });
    }
  }
}

