import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptor} from "./core/interceptors/header.interceptor";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {JwtModule} from "@auth0/angular-jwt";

export function  tokenGetter (){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    JwtModule.forRoot({
      config:{
        tokenGetter
      }
    })
  ],
  exports: [
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
