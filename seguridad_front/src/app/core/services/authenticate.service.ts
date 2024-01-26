import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../auth/models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
  }

  login(data: { usuarioNombre: string, usuarioClave: string }): Observable<User> {
    return this.http.post<User>(`${environment.authUrl}/login`, data)
      .pipe(
        tap((data: any) => data),
        catchError((err => throwError(() => err)))
      )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ?? '';
    return !this.jwtHelper.isTokenExpired(token);
  }
}
