import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalApp } from 'src/app/shared/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
    loginForm: FormGroup; 

    
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, protected http: HttpClient, protected globalApp: GlobalApp, private router: Router, private fb: FormBuilder) 
    { 
        this.loginForm = fb.group({  
            'username' : [null, Validators.required],
            'password' : [null, Validators.required]
        });
    }

    ngOnInit() {
        
    }

    onFormSubmit(form:NgForm)  
    {  
        form['grant_type'] = "password";
        form['client_id'] = this.globalApp.client_id + "";
        form['client_secret'] = this.globalApp.client_secret + "";
        form['scope'] = '';

        this.http.post(this.globalApp.base_url + 'oauth/token', form).subscribe((response) => {

            const token = response['token_type'] + ' ' + response['access_token'];
            this.storage.set('token', token);

            this.http.get(this.globalApp.base_url + 'rest/user?username=' + form['username'], {
                    headers: new HttpHeaders().set('Authorization', token)
                }).subscribe((response) => {
                
                console.log(response);    
            });
            //console.log(response);
        }, (error) => {
            console.log(error);
        }); 
    }

    join() {
        this.router.navigate(['/join']);       
    }

    forgot() {
        this.router.navigate(['/forgot']);       
    }
}
