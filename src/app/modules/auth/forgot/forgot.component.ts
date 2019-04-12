import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit 
{
    forgotForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) 
    { 
        this.forgotForm = fb.group({  
            'email' : [null, Validators.required],
        });
    }

    ngOnInit() {

    }
}
