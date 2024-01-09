import {createReducer, on} from "@ngrx/store";
import {setError, setToken} from "./auth.actions";

export interface AuthState {
  userDetails: any,
  token: string,
  error: string
}

export const initialState: AuthState ={
  userDetails: null,
  token: "",
  error: ""
}

export const authReducer = createReducer(
  initialState,
  on(setToken, (state, {token}) => {return { ...state, token}}),
  on(setError, (state, {error}) => {return { ...state, error}}),
)
