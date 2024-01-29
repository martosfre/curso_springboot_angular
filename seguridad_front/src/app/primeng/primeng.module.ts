import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import {MessagesModule} from "primeng/messages";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { MegaMenuModule } from 'primeng/megamenu';
import {MenuModule} from "primeng/menu";
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    MessagesModule,
    ConfirmDialogModule,
    MenuModule,
    MegaMenuModule,
    ToastModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    MessagesModule,
    ConfirmDialogModule,
    MenuModule,
    MegaMenuModule,
    ToastModule
  ],
})
export class PrimengModule { }
