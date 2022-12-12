import { Consultas } from './../../models/consultas';
import { ConsultaService } from './../../service/consulta.service';
import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //Creamos una Variable de tipo Formulario
  public consultasForm: FormGroup;

  constructor(
    private consultaService: ConsultaService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
      this.consultasForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        whatsapp: ['', Validators.required],
        fecha_ingreso: ['', Validators.required],
        fecha_salida: ['', Validators.required],
        mensaje: ['', Validators.required]  
      })
    }


  //Función para enviar Datos

  realizarConsulta(){
    const Consulta: Consultas = {
      nombre: this.consultasForm.get('nombre')?.value,
      email: this.consultasForm.get('email')?.value,
      whatsapp: this.consultasForm.get('whatsapp')?.value,
      fecha_ingreso: this.consultasForm.get('fecha_ingreso')?.value,
      fecha_salida: this.consultasForm.get('fecha_salida')?.value,
      mensaje: this.consultasForm.get('mensaje')?.value,
    }

    
    this.consultaService.guardarConsulta(Consulta).subscribe({
      error: (e) => console.log(e)
    })  
    this.consultasForm.reset()
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 2)

  };
}
