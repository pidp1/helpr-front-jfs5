import { Router } from '@angular/router';
import { CargoService } from './../../../services/cargo.service';
import { Cargo } from 'src/app/models/cargo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargo: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private cargoService: CargoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formCargo = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      senha: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCargo.valid) {
      const cargo: Cargo = this.formCargo.value;
      this.cargoService.create(cargo).subscribe(response => {
        this.toastr.success("Cargo cadastrado com sucesso!");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }
}
