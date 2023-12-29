import {SistemaState} from "./sistema.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectSistemaState = createFeatureSelector<SistemaState>("sistemaState");

export const selectSistemas = () => createSelector(
  selectSistemaState,
  (state:SistemaState) => state.sistemas
)
