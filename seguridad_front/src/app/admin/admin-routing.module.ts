import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SistemaListComponent} from "./pages/sistema-list/sistema-list.component";
import {SistemaCreateComponent} from "./pages/sistema-create/sistema-create.component";


const routes: Routes = [
  {
    path: "",
    component: SistemaListComponent //Smart Component (1)
  },
  {
    path: "sistema",
    component: SistemaListComponent,
  },
  {
    path: 'sistema/create', children: [
      {
        path: "",
        component: SistemaCreateComponent
      },
      {
        path: ":id",
        component: SistemaCreateComponent,
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
