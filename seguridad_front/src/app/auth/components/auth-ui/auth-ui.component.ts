import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrl: './auth-ui.component.css'
})
export class AuthUiComponent  implements OnInit {
  @Input() error: string = "";
  @Output() submitEmitter = new EventEmitter();
  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      usuarioNombre:['', Validators.required],
      usuarioClave:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.submitEmitter.emit(this.form.value)
  }

}
