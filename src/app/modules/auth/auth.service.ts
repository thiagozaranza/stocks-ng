import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalApp } from 'src/app/shared/global';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService 
{
    private callAuthService = new Subject<any>();
    callAuthService$ = this.callAuthService.asObservable();

    constructor(protected http: HttpClient, protected globalApp: GlobalApp, private router: Router) 
    { 
        
    }

    login(form:NgForm)
    {
        form['grant_type'] = "password";
        form['client_id'] = this.globalApp.client_id + "";
        form['client_secret'] = this.globalApp.client_secret + "";
        form['scope'] = '';

        this.http.post(this.globalApp.base_url + 'oauth/token', form).subscribe((response) => {

            const token = response['token_type'] + ' ' + response['access_token'];
            const tokenPayload = decode(response['access_token']);

            localStorage.setItem('access_token', token);

            this.http.get(this.globalApp.base_url + 'rest/user/' + tokenPayload['sub'], {
                    headers: new HttpHeaders().set('Authorization', token)
                }).subscribe((response) => {
                
                    localStorage.setItem('user_name', response['data']['name']);
                    localStorage.setItem('user_id', response['data']['id']);

                    this.callAuthService.next(response['data']);
                    
                    this.router.navigate(['/setor']);  
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

        this.router.navigate(['/login']);  
    }
}
