import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SistemaCreateComponent} from "./pages/sistema-create/sistema-create.component";
import {SharedModule} from "../shared/shared.module";
import {SistemaUiComponent} from "./components/sistema-ui/sistema-ui.component";
import {MaterialModule} from "../material/material.module";
import {SistemaListComponent} from "./pages/sistema-list/sistema-list.component";
import {SistemaUiListComponent} from "./components/sistema-ui-list/sistema-ui-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  /*
     Declaramos todos los componentes , directivas y pipes que forman parte del módulo, los componentes
     se deben declarar en un solo módulo
   */
  declarations: [
    SistemaCreateComponent,
    SistemaListComponent,
    SistemaUiComponent,
    SistemaUiListComponent
  ],
  imports: [ // Declaramos todos los módulos que se van a utilizar en los componentes
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule

  ],
  //Declarmos los servicios que van a estar disponibles para la inyección de dependencia
  providers: [],
  //Declaramos todos los componentes , directivas y pipes que van a estar disponibles a otros módulos una vez que se importe
  exports: [],
  //Se define el componente principal del módulo, esto es utilizado principalmente para el módulo principal
  bootstrap:[],
  //Declaramos los componentes que deberían serr cargados dinámicamente a la aplicación
  //entryComponents: [],
})
export class AdminModule { }