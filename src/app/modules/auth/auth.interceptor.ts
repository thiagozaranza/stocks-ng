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
        const token = localStorage.getItem('access_token');

        if (token != null) {
            request = request.clone({
            setHeaders: {
                Authorization: token
            }
            });
        }
        return next.handle(request);
    }
}
