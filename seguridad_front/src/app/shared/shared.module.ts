import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {RouterModule} from "@angular/router";
import {PrimengModule} from "../primeng/primeng.module";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule {
}
