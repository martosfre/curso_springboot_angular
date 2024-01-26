import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthenticateService} from "../../core/services/authenticate.service";
import {Router} from "@angular/router";
import {AuthActions} from "./auth.actions";
import {catchError, EMPTY, map, mergeMap, tap} from "rxjs";
import {User} from "../models/user.interface";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticateService,
    private router: Router
  ) {}

  loginUser$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        mergeMap(((data: {type: string, payload: User}) =>
          this.authService.login(data.payload).pipe(
            map(data => ({
              type: AuthActions.SET_TOKEN,
              token: data.token
            })),
            tap(() => {this.router.navigate(["admin"])}),
            catchError(async (data) => ({
              type: AuthActions.LOGIN_ERROR,
              error: data.error}))
          ))
        ))
    }, {dispatch:true}
  );
}
