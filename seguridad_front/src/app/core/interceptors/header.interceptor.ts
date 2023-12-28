import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization: string = localStorage.getItem('token') ?
      `Bearer ${localStorage.getItem('token')}` : '';
    if (req.url.includes("api"))
      return next.handle(req.clone({
        setHeaders: {Authorization}
      }));
    else
      return next.handle(req);
  }

}
