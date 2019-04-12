import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit 
{
    loginForm: FormGroup; 

    
    constructor(private authService: AuthService, private fb: FormBuilder) 
    { 
        this.loginForm = fb.group({  
            'username' : [null, Validators.required],
            'password' : [null, Validators.required]
        });
    }

    ngOnInit() {
        if (this.authService.isAuthenticated())
            this.authService.home();
    }

    onFormSubmit(form:NgForm)
    {  
        this.authService.loginSubmit(form);
    }

    join() {
        this.authService.join();       
    }

    forgot() {
        this.authService.forgot();       
    }
}
