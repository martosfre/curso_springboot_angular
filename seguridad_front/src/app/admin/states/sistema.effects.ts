import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SistemaService} from "../services/sistema.service";
import {Router} from "@angular/router";
import {SistemaActions} from "./sistema.actions";
import {catchError, EMPTY, map, mergeMap} from "rxjs";

@Injectable()
export class SistemaEffects {
  constructor(
    private actions: Actions,
    private sistemaService: SistemaService,
    private router: Router
  ){}

  sistemas$ = createEffect(() => {
    return this.actions.pipe(
      ofType(SistemaActions.GET_SISTEMAS_LIST),
      mergeMap(() => this.sistemaService.getSistemas()
        .pipe(
          map(sistemas => ({type: SistemaActions.SET_SISTEMAS_LIST, sistemas})),
          catchError(() => EMPTY)
        ))
    )
  }, {dispatch: true})
}
