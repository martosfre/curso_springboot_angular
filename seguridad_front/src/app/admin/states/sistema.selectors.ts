import {SistemaState} from "./sistema.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

//Recuperación del state asociado al reducer configurado en el módulo
export const selectSistemaState = createFeatureSelector<SistemaState>("sistemaState");

export const selectSistemas = () => createSelector(
  selectSistemaState,
  (state:SistemaState) => state.sistemas
)

export const selectSistema = (id: number) => createSelector(
  selectSistemaState,
  (state:SistemaState) => state.sistemas.find( d => d.sistemaId == id)
)
