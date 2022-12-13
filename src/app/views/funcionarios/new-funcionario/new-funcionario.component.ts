import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formFuncionarios: FormGroup

  public cargos: Cargo[] = []


  public fotoUrl: String = ""
  public isLoadUpload: boolean = false

  constructor(
    formBuilder: FormBuilder, 
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.formFuncionarios = formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      foto: [''],
      idCargo: ['', [Validators.required]],
    })
}

  ngOnInit(): void {
    this.initializeCargosField()
  }

  initializeCargosField(){
    this.cargoService.findAll().subscribe(
      (response) => {this.cargos = response}
    )
  }
  
  //criar funcionario
  create(): void {
    if(this.formFuncionarios.valid) {
      const funcionario: Funcionario = this.formFuncionarios.value
      this.funcionarioService.save(funcionario).subscribe(
        (response => {
          this.toastr.success("Funcionário cadastrado com sucesso!")
          this.router.navigate(["/funcionarios"]);
        })
      )
    }
  }

  public uploadFile(event: any): void {
    console.log("chegou no uploadTS")
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.funcionarioService.adicionarImagem(file).subscribe(uploadResult  => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl;
      })
    });
  }

}