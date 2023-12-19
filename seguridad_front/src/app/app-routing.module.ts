import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path:"",
    redirectTo: "admin",
    pathMatch:"full"
  },
  {
    path:"admin",
    loadChildren: () =>
      import("./admin/admin.module")
        .then((modules) => modules.AdminModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
