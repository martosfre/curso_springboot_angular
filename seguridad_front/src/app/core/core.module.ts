import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HeaderInterceptor} from "./interceptors/header.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
