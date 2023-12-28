import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sistema} from "../../models/sistema.interface";
import {Operaciones} from "../../enums/operaciones.enum";

@Component({
  selector: 'app-sistema-ui-list',
  templateUrl: './sistema-ui-list.component.html',
  styleUrl: './sistema-ui-list.component.css'
})
export class SistemaUiListComponent implements OnInit{

  @Input() cabeceras: Array<{
    cabecera:string, valorCabecera: keyof Sistema
  }> =[];
  @Input() sistemas!: Sistema[];
  @Output() sistema:EventEmitter<any> = new EventEmitter<{sistema:Sistema, action:Operaciones}>();


  ngOnInit(): void {
  }
}
