import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SistemaService} from "../services/sistema.service";
import {Router} from "@angular/router";
import {SistemaActions} from "./sistema.actions";
import {catchError, EMPTY, map, mergeMap, tap} from "rxjs";
import {Sistema} from "../models/sistema.interface";

@Injectable()
export class SistemaEffects {
  constructor(
    private actions$: Actions,
    private sistemaService: SistemaService,
    private router: Router
  ){}

  sistemas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SistemaActions.GET_SISTEMAS_LIST),
      mergeMap(() => this.sistemaService.getSistemas()
        .pipe(
          map(sistemas => ({
            type: SistemaActions.SET_SISTEMAS_LIST,
            sistemas
          })),
          catchError(async (data) => ({type:SistemaActions.SET_ERROR, error: data}))
        ))
    )
  }, {dispatch: true});

  addSistema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SistemaActions.ADD_SISTEMA_API),
      mergeMap((data: {type: string, payload: Sistema}) => this.sistemaService.addSistema(data.payload)
        .pipe(
          map(sistema => ({
            type: SistemaActions.ADD_SISTEMA_STATE,
            sistema: data.payload
          })),
          tap(() => { this.router.navigate(["admin/sistema"]) }),
          catchError(async (data) => ({type:SistemaActions.SET_ERROR, error: data}))
          ))
      )
    }, {dispatch: true});

  modifySistema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SistemaActions.MODIFY_SISTEMA_API),
      mergeMap((data: {type: string, payload: Sistema}) =>
        this.sistemaService.updateSistema(data.payload.sistemaId, data.payload)
        .pipe(
          map(sistema => ({
            type: SistemaActions.MODIFY_SISTEMA_STATE,
            sistema: data.payload
          })),
          tap(() => this.router.navigate(["admin"])),
          catchError(async (data) => ({type:SistemaActions.SET_ERROR, error: data.error}))
        ))
    )
  }, {dispatch: true});

  removeSistema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SistemaActions.REMOVE_SISTEMA_API),
      mergeMap((data: {payload: number}) =>
        this.sistemaService.deleteSistema(data.payload)
          .pipe(
            map(() => ({
              type: SistemaActions.REMOVE_SISTEMA_STATE,
              sistemaId: data.payload
            })),
            catchError(async (data) => ({type:SistemaActions.SET_ERROR, error: data.error}))
          ))
    )
  }, {dispatch: true});
}
