import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule,
    TableModule
  ],
})
export class PrimengModule { }
