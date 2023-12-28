import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sistema} from "../models/sistema.interface";
import {catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  constructor(private http: HttpClient) {
  }

  /**
   * @method para recuperar los sistemas
   */
  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${environment.apiUrl}/sistema`).pipe(
      tap((data: Sistema[]) => data),
      catchError((err => throwError(() => err)))
    );
  }

  /**
   * @method para obtener un sistema por su identificador
   * @param id
   */
  getSistema(id: number): Observable<Sistema> {
    return this.http.get<Sistema>(`${environment.apiUrl}/sistema/${id}`).pipe(
      tap((data: Sistema) => data),
      catchError((err => throwError(() => err)))
    )
  }

  /**
   * @method para guardar un sistema
   * @param sistema
   */
  addSistema(sistema: Sistema): Observable<Sistema> {
    return this.http.post<Sistema>(`${environment.apiUrl}/sistema/`, sistema).pipe(
      tap((data: Sistema) => data),
      catchError((err => throwError(() => err)))
    )
  }

  /**
   * @method para actualizar un sistema
   * @param id
   * @param sistema
   */
  updateSistema(id: number, sistema: Sistema): Observable<Sistema> {
    return this.http.put<Sistema>(`${environment.apiUrl}/sistema/${id}`, sistema).pipe(
      tap((data: Sistema) => data),
      catchError((err => throwError(() => err)))
    )
  }

  /**
   * @method para eliminar un sistema por su identificador
   * @param id
   */
  deleteSistema(id: number): Observable<Sistema>{
    return this.http.delete<Sistema>(`${environment.apiUrl}/sistema/${id}`).pipe(
      catchError((err => throwError(() => err)))
    )
  }

}
