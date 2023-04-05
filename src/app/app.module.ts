import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './formulario/formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './shared/form-error/form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    FormErrorComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
