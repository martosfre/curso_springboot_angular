import {Sistema} from "../models/sistema.interface";
import {createReducer, on} from "@ngrx/store";
import {addSistemaState, modifySistemaState, removeSistemaState, setSistemaList} from "./sistema.actions";


export interface SistemaState{
  sistemas: Sistema[];
}

export const initialState: SistemaState = {
  sistemas:[]
}

export const sistemaReducer = createReducer(
  initialState,
  on(setSistemaList, (state, { sistemas }) => {
    return {...state, sistemas}
  }),
  on(addSistemaState, (state, { sistema }) => {
    return {...state, sistemas:[...state.sistemas, sistema]}
  }),
  on(modifySistemaState, (state, { sistema }) => {
    return {
      ...state, sistemas:[...state.sistemas.map(data => data.sistemaId === sistema.sistemaId ? sistema: data)]
    }
  }),
  on(removeSistemaState, (state, { sistemaId }) => {
    return {
      ...state, sistemas:[...state.sistemas.filter(data => data.sistemaId != sistemaId)]
    }
  }),
);


