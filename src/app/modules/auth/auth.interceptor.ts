import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor 
{
    constructor() { 

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        request = request.clone({
        setHeaders: {
            Authorization: localStorage.getItem('access_token')
        }
        });
        return next.handle(request);
    }
}
