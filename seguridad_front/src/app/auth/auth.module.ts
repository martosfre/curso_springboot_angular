import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./pages/login/login.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {authReducer} from "./state/auth.reducers";
import {AuthEffects} from "./state/auth.effects";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {PrimengModule} from "../primeng/primeng.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthUiComponent} from "./components/auth-ui/auth-ui.component";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
    AuthUiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PrimengModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authState', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
