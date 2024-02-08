import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticateService} from "../services/authenticate.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticateService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
