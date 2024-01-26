import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sistema} from "../../models/sistema.interface";
import {Operaciones} from "../../enums/operaciones.enum";
import {ConfirmationService, Message} from "primeng/api";

@Component({
  selector: 'app-sistema-ui-list',
  templateUrl: './sistema-ui-list.component.html', //(4) aqui está la pantalla
  styleUrl: './sistema-ui-list.component.css'
})
export class SistemaUiListComponent implements OnInit {

  @Input() cabeceras: Array<{
    cabecera: string, valorCabecera: keyof Sistema
  }> = []; //(5) viene del smart
  @Input() sistemas!: Sistema[]; //(5) viene del smart
  @Output() sistema: EventEmitter<any> = new EventEmitter<{ sistema: Sistema, action: Operaciones }>(); // (5.1) va al smart

  sistemaSeleccionado!: Sistema;

  msgs: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
  }

  /**
   * @method seleccionarSistema: Método para ejecutar la acción de guardar o actualizar en el formulario
   * @param sistema
   * @param action
   */
  executeFormAction(sistema: Sistema, action: Operaciones) {
    this.sistema.emit({sistema, action}); // (5.1) Llama al evento del smart
  }

  /**
   * @method confirmDelete: Método para confirmar la operación de eliminación de un ssitema
   * @param sistema: Sistema a eliminar
   */
  confirmDelete(sistema: Sistema) {
    this.confirmationService.confirm({
      message: 'Está seguro de eliminar el registro?',
      header: 'Confirmación de Elimación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.executeFormAction(sistema, Operaciones.Eliminar);
        this.msgs = [{severity: 'info', summary: 'Información:', detail: 'Registro eliminado'}];
      },
      reject: () => {
      }
    });
  }
}
