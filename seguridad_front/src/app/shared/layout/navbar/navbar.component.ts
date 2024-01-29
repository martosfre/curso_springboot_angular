import {Component, EventEmitter, Output} from '@angular/core';
import {Operaciones} from "../../../admin/enums/operaciones.enum";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() action = new EventEmitter<Operaciones>(); // Llega como parámetro la acción

 titulo: string = "";

  /**
   * @method emitAction: Método para ejecutar las acciones de la barra de aareas
   * @param action: Acción a ejecutar
   */
  emitAction(action: Operaciones) {
    this.action.emit(action);
  }
}
