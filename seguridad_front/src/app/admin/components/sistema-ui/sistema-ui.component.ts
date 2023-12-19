import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sistema-ui',
  templateUrl: './sistema-ui.component.html',
  styleUrl: './sistema-ui.component.css'
})
export class SistemaUiComponent implements OnInit {
  //Recibir información de los smart components
  @Input() selectId: string = "";
  @Input() actionButtonLabel: string = "Crear";

  //Enviar o ejecutar acción hacia los servicios
  @Output() action: EventEmitter<any> = new EventEmitter();

  //Objeto para agrupar los elementos de un formulario utlizado ReactiveForms
  form:FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      id: [''],
      nombreSis: [''],
      descripcionSis: [''],
      contextoSis: ['']
    })
  }

  //Inicializar Formulario
  ngOnInit(): void {
    this.validarAction();
  }

  /**
   * @method para validar si se trata de una operación de guardar o actualizar
   */
  validarAction(){
    if(this.selectId){
      this.actionButtonLabel = "Actualizar";
    }
  }

  emitirAction(){
    this.action.emit({value: this.form.value, action: this.actionButtonLabel});
  }

  clear(){
    this.form.reset();
  }

}
