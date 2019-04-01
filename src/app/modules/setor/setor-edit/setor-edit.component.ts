import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { SetorService } from '../setor.service';
import { EditComponent } from 'src/app/shared/components/crud/edit-component';
import { Setor } from '../setor';
import * as setorFactory from '../setor.factory';

@Component({
    selector: 'app-setor-edit',
    templateUrl: './setor-edit.component.html',
    styleUrls: ['./setor-edit.component.scss']
})

export class SetorEditComponent extends EditComponent implements OnInit 
{
    id: number;

    setorForm: FormGroup; 

    nome:string='';
    private setor: Setor;

    @ViewChild('formNome') form_nome:ElementRef;

    constructor(private router: Router, private route: ActivatedRoute, protected service: SetorService, private fb: FormBuilder, protected dialog: MatDialog) 
    {
        super();

        this.setorForm = fb.group({  
            'nome' : [null, Validators.required]
        });

        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.setor = setorFactory.create();
    }

    ngOnInit() 
    {
        this.form_nome.nativeElement.focus();
        this['pick'](this.id);
    }

    onPickSuccess(response)
    {
        this.setor = response.data;
    }

    onFormSubmit(form:NgForm)  
    {  
        this['save'](this.id, form);  
    }
}
