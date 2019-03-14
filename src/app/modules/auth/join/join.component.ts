import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GlobalApp } from 'src/app/shared/global';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit 
{
    joinForm: FormGroup; 
    
    constructor(private authService: AuthService, private fb: FormBuilder) 
    { 
        this.joinForm = fb.group({  
            'name' : [null, Validators.required],
            'email' : [null, Validators.required],
            'password' : [null, Validators.required],
            'password_confirmation' : [null, Validators.required]
        });
    }

    ngOnInit() {
    }

    onFormSubmit(form:NgForm)  
    {  
        this.authService.registerSubmit(form);
    }
}
