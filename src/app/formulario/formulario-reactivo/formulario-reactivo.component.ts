import { Component,EventEmitter,Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  nombreControl = new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20)])
  apellidoControl = new FormControl("",[Validators.required,Validators.minLength(4)])
  correoControl = new FormControl("",[Validators.required,Validators.email])
  ciudadControl = new FormControl("",[this.noSelected()])
  direccionControl = new FormControl("",[Validators.required,Validators.minLength(10)])
  colegioControl = new FormControl("",[Validators.required,Validators.minLength(10)])
  formulario: FormGroup
  onDato:EventEmitter<FormGroup> = new EventEmitter()


  constructor(public formBuilder: FormBuilder){
    this.formulario = formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      correo: this.correoControl,
      localizacion: formBuilder.group({
        ciudad:this.ciudadControl,
        direccion: this.direccionControl,
        colegio: this.colegioControl
      })
    })
  }
  
  enviarDatos(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      this.formulario.reset()
    }else{
      this.formulario.markAllAsTouched()
    }
  }

  noSelected():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
      if (control.value==="") {
        return {
          noSelect: true
        }
      }
      return null
    }
  }

  
}
