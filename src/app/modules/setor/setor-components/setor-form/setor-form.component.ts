import { Component, Input } from '@angular/core';
import { SetorService } from '../../setor.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Setor } from '../../setor';
import { GenericFormComponent } from 'src/app/shared/generics/generic-form.component';

@Component({
    selector: 'app-setor-form',
    templateUrl: './setor-form.component.html',
    styleUrls: ['./setor-form.component.scss']
})
export class SetorFormComponent extends GenericFormComponent 
{
    @Input() element: Setor;

    constructor(public service: SetorService, public fb: FormBuilder, public dialog: MatDialog) 
    { 
        super();

        this.elementForm = fb.group({  
            'nome' : [null, Validators.required]
        });
    }
}
