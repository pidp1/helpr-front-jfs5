import { Component, OnInit } from '@angular/core';
import { FuturoCandidatoService } from './../../../services/futuro-candidato.service';
import { ToastrService } from 'ngx-toastr';
import { FuturoCandidato } from './../../../models/futuro-candidato';

@Component({
  selector: 'app-futuro-candidato',
  templateUrl: './futuro-candidato.component.html',
  styleUrls: ['./futuro-candidato.component.css']
})
export class FuturoCandidatoComponent implements OnInit {

  displayedColumns: string[] = ['idFuturoCandidato', 'nome','email', 'descricaoHabilidades','setor', 'editar', 'excluir'];
  dataSource: FuturoCandidato[] = [];

  constructor(
    private futuroCandidatoService: FuturoCandidatoService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroCandidatoService.findAll().subscribe(futuroCandidato => {
      this.dataSource = futuroCandidato;
    });
  }

  public delete(idFuturoCandidato: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futuroCandidatoService.delete(idFuturoCandidato).subscribe(() => {
        this.toastr.success("Candidato excluido.");
        this.initializeTable();
      });
    }
  }
}
