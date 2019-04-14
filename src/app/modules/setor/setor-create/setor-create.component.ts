import { Component, ViewChild } from '@angular/core';
import { GenericCreateComponent } from 'src/app/shared/generics/generic-create.component';
import { MatDialog } from '@angular/material';

import { Setor } from '../setor';
import { SetorService } from '../setor.service';
import { SetorFormComponent } from '../setor-components/setor-form/setor-form.component';
import * as setorFactory from '../setor.factory';

@Component({
  selector: 'app-setor-create',
  templateUrl: './setor-create.component.html',
  styleUrls: ['./setor-create.component.scss']
})

export class SetorCreateComponent extends GenericCreateComponent {

    protected element: Setor;

    @ViewChild('formSetor') form: SetorFormComponent;

    constructor(protected service: SetorService, protected dialog: MatDialog) 
    { 
        super();
        this.element = setorFactory.create();
    }
}
