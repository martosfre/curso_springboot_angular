import {Sistema} from "../models/sistema.interface";
import {createReducer, on} from "@ngrx/store";
import {setSistemaList} from "./sistema.actions";


export interface SistemaState{
  sistemas: Sistema[];
}

export const initialState: SistemaState = {
  sistemas:[]
}

export const sistemaReducer = createReducer(
  initialState,
  on(
    setSistemaList,
    (state, { sistemas }) => {
    return {...state, sistemas}
  })
);


