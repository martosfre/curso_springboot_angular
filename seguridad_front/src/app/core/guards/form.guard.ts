import { CanDeactivateFn } from '@angular/router';

export const formGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
    const confirmation = confirm("Está seguro de salir, el formulario ha sido modificado?");
    if(confirmation){
      return true;
    }else{
      return false;
    }
};
