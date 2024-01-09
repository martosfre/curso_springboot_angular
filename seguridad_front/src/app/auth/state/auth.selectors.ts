import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducers";

export const selectAuthState = createFeatureSelector<AuthState>("authState");

export const selectToken = () => createSelector(
  selectAuthState,
  (state:AuthState) => state.token
)

export const selectError = () => createSelector(
  selectAuthState,
  (state:AuthState) => state.error
)
