import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GlobalApp } from 'src/app/shared/global';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit 
{
    joinForm: FormGroup; 
    
    constructor(protected http: HttpClient, protected globalApp: GlobalApp, private router: Router, private fb: FormBuilder) 
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
        this.http.post(this.globalApp.base_url + 'register', form).subscribe((response) => {

        }, (error) => {

        }); 
    }

}
