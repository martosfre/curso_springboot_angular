import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private http: HttpClient) { }

  login(data:{usuarioNombre:string, usuarioClave:string}):Observable<any>{
    return this.http.post<any>(`${environment.authUrl}/login`, data).pipe(
      tap((data:any) => data),
      catchError((err => throwError(() => err)))
    )
  }
}
