import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {ToolbarComponent} from "./layout/toolbar/toolbar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class SharedModule {
}
