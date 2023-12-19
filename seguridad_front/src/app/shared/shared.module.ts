import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {ToolbarComponent} from "./layout/toolbar/toolbar.component";
import {FooterComponent} from "./layout/footer/footer.component";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class SharedModule {
}
