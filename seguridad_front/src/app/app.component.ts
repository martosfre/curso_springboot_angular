import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Conmo se va a llamar al componente
  templateUrl: './app.component.html', //Cúal es la página web o cual es contenido html (vista)
  styleUrl: './app.component.css' //Hoja(s) de estilo
})
export class AppComponent {
  title = 'Seguridades FFTT';
  nombre = "Matoosfes ";
  isDisabled = false;
}
