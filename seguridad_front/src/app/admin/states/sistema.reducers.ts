import {Sistema} from "../models/sistema.interface";
import {createReducer, on} from "@ngrx/store";
import {addSistemaState, modifySistemaState, removeSistemaState, setError, setSistemaList} from "./sistema.actions";


export interface SistemaState{
  sistemas: Sistema[];
  error: any;
}

export const initialState: SistemaState = {
  sistemas:[],
  error: null
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
      ...state, sistemas:state.sistemas.map(data => data.sistemaId === sistema.sistemaId ? sistema: data)
    }
  }),
  on(removeSistemaState, (state, { sistemaId }) => {
    return {
      //...state, sistemas:[...state.sistemas.filter(data => data.sistemaId != sistemaId)]
      ...state, sistemas: state.sistemas.filter(data => data.sistemaId != sistemaId)
    }
  }),
  on(setError, (state, {error}) => {return { ...state, error}}),
);


