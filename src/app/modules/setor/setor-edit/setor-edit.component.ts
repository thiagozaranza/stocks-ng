import { Component, OnInit, ViewChild } from '@angular/core';

import { GenericEditComponent } from 'src/app/shared/generics/generic-edit.component';
import { SetorService } from '../setor.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import * as setorFactory from '../setor.factory';
import { SetorFormComponent } from '../setor-components/setor-form/setor-form.component';
import { Setor } from '../setor';

@Component({
    selector: 'app-setor-edit',
    templateUrl: './setor-edit.component.html',
    styleUrls: ['./setor-edit.component.scss']
})

export class SetorEditComponent extends GenericEditComponent implements OnInit
{
    protected element: Setor;

    @ViewChild('formSetor') form: SetorFormComponent;

    constructor(protected service: SetorService, protected route: ActivatedRoute, protected dialog: MatDialog) 
    {
        super();
        this.element = setorFactory.create();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
