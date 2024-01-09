import {createAction, props} from "@ngrx/store";

export enum AuthActions {
  LOGIN = '[AUTH] Login',
  SET_TOKEN = '[AUTH] Set Token',
  LOGIN_ERROR = '[AUTH] Set Error'
}

export const setToken = createAction(
  AuthActions.SET_TOKEN,
  props<{ token: string }>()
);

export const setError = createAction(
  AuthActions.LOGIN_ERROR,
  props<{ error: string }>()
);
