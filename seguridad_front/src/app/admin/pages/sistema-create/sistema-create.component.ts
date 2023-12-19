import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrl: './sistema-create.component.css'
})
export class SistemaCreateComponent implements OnInit{
  //Variable para poder identificar si se va a guardar o actualizar
  id:string = "";

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }
}
