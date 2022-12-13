import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';
import { FuturoCliente } from 'src/app/models/futuro-cliente';

@Component({
  selector: 'app-futuros-clientes',
  templateUrl: './futuros-clientes.component.html',
  styleUrls: ['./futuros-clientes.component.css']
})
export class FuturosClientesComponent implements OnInit {

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

