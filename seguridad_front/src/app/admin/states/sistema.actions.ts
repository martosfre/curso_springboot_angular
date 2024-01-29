import {createAction, props} from "@ngrx/store";
import {Sistema} from "../models/sistema.interface";

export enum SistemaActions {
  GET_SISTEMAS_LIST = '[Sistema] Get Sistema List',
  SET_SISTEMAS_LIST = '[Sistema] Set Sistema List',
  ADD_SISTEMA_STATE = '[Sistema] Add Sistema (STATE)',
  ADD_SISTEMA_API = '[Sistema] Add Sistema (API)',
  MODIFY_SISTEMA_STATE = '[Sistema] Modify Sistema (STATE)',
  MODIFY_SISTEMA_API = '[Sistema] Modify Sistema (API)',
  REMOVE_SISTEMA_STATE = '[Sistema] Remove Sistema (STATE)',
  REMOVE_SISTEMA_API = '[Sistema] Remove Sistema (API)',
  SET_ERROR = '[Sistema] Set Error',
}

export const getSistemaList = createAction(
  SistemaActions.GET_SISTEMAS_LIST
);

export const setSistemaList = createAction(
  SistemaActions.SET_SISTEMAS_LIST,
  props<{ sistemas: Sistema[] }>()
);

export const addSistemaState = createAction(
  SistemaActions.ADD_SISTEMA_STATE,
  props<{ sistema: Sistema }>()
)

export const modifySistemaState = createAction(
  SistemaActions.MODIFY_SISTEMA_STATE,
  props<{ sistema: Sistema }>()
)

export const removeSistemaState = createAction(
  SistemaActions.REMOVE_SISTEMA_STATE,
  props<{ sistemaId: number }>()
)

export const setError = createAction(
  SistemaActions.SET_ERROR,
  props<{ error: string }>()
)
