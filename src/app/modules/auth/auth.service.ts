import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalApp } from 'src/app/shared/global';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNull } from 'util';

@Injectable({
    providedIn: 'root'
})

export class AuthService 
{
    private callAuthService = new Subject<any>();
    callAuthService$ = this.callAuthService.asObservable();

    constructor(public jwtHelper: JwtHelperService, protected http: HttpClient, protected globalApp: GlobalApp, private router: Router) 
    { 
        
    }

    public isAuthenticated(): boolean 
    {
        const token = localStorage.getItem('access_token');

        if (token == 'null' || token == null)
            return false;

        return !this.jwtHelper.isTokenExpired(token);
    }

    login()
    {
        if (!this.isAuthenticated())
            this.router.navigate(['/login']);
        else     
            this.router.navigate(['/home']);
    }

    home()
    {
        this.router.navigate(['/home']); 
    }

    join()
    {
        this.router.navigate(['/join']); 
    }

    register()
    {
        this.router.navigate(['/register']); 
    }

    registerSubmit(form:NgForm)
    {
        this.http.post(this.globalApp.base_url + 'register', form).subscribe((response) => {
            this.login();
        }, (error) => {
            console.log(error);
        }); 
    }

    forgot()
    {
        this.router.navigate(['/forgot']); 
    }

    loginSubmit(form:NgForm)
    {
        form['grant_type'] = "password";
        form['client_id'] = this.globalApp.client_id + "";
        form['client_secret'] = this.globalApp.client_secret + "";
        form['scope'] = '';

        this.http.post(this.globalApp.base_url + 'oauth/token', form).subscribe((response) => {

            const token = response['token_type'] + ' ' + response['access_token'];
            const tokenPayload = decode(response['access_token']);

            localStorage.setItem('access_token', token);

            console.log(localStorage.getItem('access_token'));

            this.http.get(this.globalApp.base_url + 'rest/user/' + tokenPayload['sub'], {
                    headers: new HttpHeaders().set('Authorization', token)
                }).subscribe((response) => {
                
                    localStorage.setItem('user_name', response['data']['name']);
                    localStorage.setItem('user_id', response['data']['id']);

                    this.callAuthService.next(response['data']);
                    
                    this.router.navigate(['/home']);  
                });
        }, (error) => {
            console.log(error);
        }); 
    }

    logout()
    {
        localStorage.setItem('access_token', null);
        localStorage.setItem('user_name', null);
        localStorage.setItem('user_id', null);

        this.callAuthService.next(null);

        this.router.navigate(['/landpage']);  
    }
}
