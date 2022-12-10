import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  agregarDatos(){

    const Codigo=this.form.value.codigo;
    const persona: persona = {

      CodigoSucursal: this.form.value.codigo,
      Nombre: this.form.value.nombre,
      Direccion: this.form.value.direccion,
      Telefono: this.form.value.telefono,


    }


  }

}
