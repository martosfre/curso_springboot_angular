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
import {PrimengModule} from "../primeng/primeng.module";
import {EffectsModule} from "@ngrx/effects";
import {SistemaEffects} from "./states/sistema.effects";
import {sistemaReducer} from "./states/sistema.reducers";
import {StoreModule} from "@ngrx/store";
import {ConfirmationService} from "primeng/api";

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
    PrimengModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    StoreModule.forFeature('sistemaState', sistemaReducer),
    EffectsModule.forFeature([SistemaEffects])
  ],
  //Declarmos los servicios que van a estar disponibles para la inyección de dependencia
  providers: [
    ConfirmationService
  ],
  //Declaramos todos los componentes , directivas y pipes que van a estar disponibles a otros módulos una vez que se importe
  exports: [],
  //Se define el componente principal del módulo, esto es utilizado principalmente para el módulo principal
  bootstrap:[],
  //Declaramos los componentes que deberían serr cargados dinámicamente a la aplicación
  //entryComponents: [],
})
export class AdminModule { }
