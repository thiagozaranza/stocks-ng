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

    
    constructor(private service: AuthService, private router: Router, private fb: FormBuilder) 
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
        this.service.login(form);
    }

    join() {
        this.router.navigate(['/join']);       
    }

    forgot() {
        this.router.navigate(['/forgot']);       
    }
}
