import {Component, EventEmitter, OnInit} from '@angular/core';
import {Sistema} from "../../models/sistema.interface";
import {Router} from "@angular/router";
import {Operaciones} from "../../enums/operaciones.enum";

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrl: './sistema-list.component.css'
})
export class SistemaListComponent  implements OnInit{
  tituloFormulario:string = "Gestión de Sistemas";
  sistemas!: Sistema[];

  sistema:EventEmitter<any> = new EventEmitter<{sistema:Sistema, action:Operaciones}>();

  cabeceras:{
    cabecera:string, valorCabecera: keyof Sistema
  }[] = [
    {cabecera: "Id", valorCabecera: "sistemaId"},
    {cabecera: "Nombre", valorCabecera: "sistemaNombre"},
    {cabecera: "Descripcion", valorCabecera: "sistemaDescripcion"},
    {cabecera: "Contexto", valorCabecera: "sistemaContexto"},
  ]

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  seleccionarSistema(data:{sistema:Sistema, action:Operaciones}){

  }

}
