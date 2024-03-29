import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SistemaListComponent} from "./pages/sistema-list/sistema-list.component";
import {SistemaCreateComponent} from "./pages/sistema-create/sistema-create.component";
import {authGuard} from "../core/guards/auth.guard";


const routes: Routes = [
  {
    path: "",
    component: SistemaListComponent, //Smart Component (1)
    canActivate: [authGuard]
  },
  {
    path: "sistema",
    component: SistemaListComponent,
    canActivate: [authGuard]
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
    ],
    canActivate: [authGuard]
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
