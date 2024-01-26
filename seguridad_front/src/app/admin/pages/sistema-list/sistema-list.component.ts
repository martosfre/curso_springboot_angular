import {Component, EventEmitter, OnInit} from '@angular/core';
import {Sistema} from "../../models/sistema.interface";
import {Router} from "@angular/router";
import {Operaciones} from "../../enums/operaciones.enum";
import {SistemaState} from "../../states/sistema.reducers";
import {Store} from "@ngrx/store";
import {SistemaActions} from "../../states/sistema.actions";
import {selectSistemas} from "../../states/sistema.selectors";

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html', //se llama al dump component dentro del html (2)
  styleUrl: './sistema-list.component.css'
})
export class SistemaListComponent  implements OnInit{
  tituloFormulario:string = "Gestión de Sistemas";
  sistemas!: Sistema[];
  sistemas$ = this.store.select(selectSistemas());

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
    private router: Router,
    private store: Store<SistemaState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch({type: SistemaActions.GET_SISTEMAS_LIST})
    this.cargarSistemas();
  }

  cargarSistemas(){
    this.sistemas$.subscribe((data => {
      this.sistemas = data;
    }))
  }
  /**
   * @method seleccionarSistema: Método para ejecutar las operaciones de edición o eliminación de un sistema
   * @param data: Objeto Json con la información del sistema y la operación a ejecutar.
   */
  //(5.1) aqui le llama, verificar union en html
  seleccionarSistema(data:{sistema:Sistema, action:Operaciones}){
    switch(data.action) {
      case Operaciones.Editar: {
        this.router.navigate(['admin/sistema', 'create', data.sistema.sistemaId]);
        return;
      }
      case Operaciones.Eliminar: {
        this.store.dispatch({type: SistemaActions.REMOVE_SISTEMA_API, payload: data.sistema.sistemaId});
       // this.verifyError();
        return;

      }
      default: ""
    }
    this.router.navigate(['admin', 'sistema', data.sistema.sistemaId]);
  }


}
