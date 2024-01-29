import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SistemaActions} from "../../states/sistema.actions";
import {Sistema} from "../../models/sistema.interface";
import {Observable} from "rxjs";
import {SistemaState} from "../../states/sistema.reducers";
import {Store} from "@ngrx/store";
import {seleccionarError, selectSistema} from "../../states/sistema.selectors";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrl: './sistema-create.component.css'
})
export class SistemaCreateComponent implements OnInit {
  //Variable para poder identificar si se va a guardar o actualizar
  id: string = "";

  sistema$: Observable<Sistema | undefined>;
  sistema: Sistema | null = null;

  error$ = this.store.select(seleccionarError());

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<SistemaState>,
    private messageService: MessageService) {
    /*
      1) Recupero el identificador que viene de la ruta
      2) Llamar al selector para recuperar el sistema por su id
      3) Verifique si existe el sistema para almacenar en una variable temporar para editar
     */
    const id: number = this.route.snapshot.params['id']; //(1)
    this.sistema$ = this.store.select(selectSistema(id)); //(2)
    this.sistema$.subscribe(d => { //(3)
      if (d) this.sistema = d;
    });
  }

  ngOnInit(): void {
  }

  /**
   * @method formAction: Método para ejecutar las operaciones de creación o actualización de un sistema
   * @param data: objeto Json con los datos del sistema y la operación a realizar
   */
  formAction(data: { value: Sistema, action: string }) {
    switch (data.action) {
      case "Crear" : {
        this.store.dispatch({type: SistemaActions.ADD_SISTEMA_API, payload: data.value});
        this.verificarTransacion();
        return;
      }
      case "Actualizar" : {
        this.store.dispatch({type: SistemaActions.MODIFY_SISTEMA_API, payload: data.value});
        this.verificarTransacion();
        return;
      }

      default:
        ""
    }
  }

  verificarTransacion() {
    this.error$.subscribe({
      next: data => {
        if(data) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: data });
        }
      }
    });
  }
}
