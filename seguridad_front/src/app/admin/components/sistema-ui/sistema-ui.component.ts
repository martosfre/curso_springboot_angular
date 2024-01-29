import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sistema} from "../../models/sistema.interface";

@Component({
  selector: 'app-sistema-ui',
  templateUrl: './sistema-ui.component.html',
  styleUrl: './sistema-ui.component.css'
})
export class SistemaUiComponent implements OnInit {
  //Recibir información de los smart components
  @Input() selectedSistema: Sistema | null = null;

  @Input() selectId: string = "";
  @Input() actionButtonLabel: string = "Crear";

  //Enviar o ejecutar acción hacia los servicios
  @Output() action: EventEmitter<any> = new EventEmitter();

  //Objeto para agrupar los elementos de un formulario utlizado ReactiveForms
  form:FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      sistemaId: [''],
      sistemaNombre: ['', Validators.required],
      sistemaDescripcion: ['', Validators.required],
      sistemaContexto: ['', Validators.required],
    })
  }

  //Inicializar Formulario
  ngOnInit(): void {
    this.validarAction();
    this.validarOperacion();
  }

  /**
   * @method para validar si se trata de una operación de guardar o actualizar
   */
  validarAction(){
    if(this.selectId){
      this.actionButtonLabel = "Actualizar";
    }
  }

  /**
   * @method validarOperacion: Método para revisar si se trate de una actualización para cargar los datos en el formulario
   */
  validarOperacion() {
    if (this.selectedSistema) {
      this.actionButtonLabel = "Actualizar";
      this.actualizarValores();
    }
  }

  /**
   * @method updateValuesForm: Método para actualizar los valores en el formulario
   */
  actualizarValores () {
    if(this.selectedSistema)
      this.form.patchValue(this.selectedSistema); //Actualizo formulario
  }

  emitirAction(){
    this.action.emit({value: this.form.value, action: this.actionButtonLabel});
  }

  clear(){
    this.form.reset();
  }

}
