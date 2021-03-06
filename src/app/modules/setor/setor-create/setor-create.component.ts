import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetorService } from '../setor.service';
import { Router } from '@angular/router';
import { CreateComponent } from 'src/app/shared/components/crud/create-component';
import { Restfy } from 'src/app/shared/restfy.decorator';
import { FormBuilder, FormGroup, Validators ,NgForm } from '@angular/forms';  
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-setor-create',
  templateUrl: './setor-create.component.html',
  styleUrls: ['./setor-create.component.scss']
})

@Restfy()

export class SetorCreateComponent extends CreateComponent implements OnInit {

    setorForm: FormGroup; 

    nome:string='';

    constructor(private router: Router, protected service: SetorService, private fb: FormBuilder, protected dialog: MatDialog) 
    { 
        super();

        this.setorForm = fb.group({  
            'nome' : [null, Validators.required]
        });
    }

    @ViewChild('formNome') form_nome:ElementRef;

    ngOnInit() {
        this.form_nome.nativeElement.focus();
    }

    onFormSubmit(form:NgForm)  
    {  
        this['store'](form);  
    }  
}
