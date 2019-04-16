import { Component } from '@angular/core';
import { GenericGridComponent } from 'src/app/shared/generics/generic-grid.component';

import { SetorService } from '../../setor.service';
import { MatDialog } from '@angular/material';
import { SetorFormComponent } from '../setor-form/setor-form.component';
import { SetorCardComponent } from '../setor-card/setor-card.component';

@Component({
    selector: 'app-setor-grid',
    templateUrl: './setor-grid.component.html',
    styleUrls: ['./setor-grid.component.scss']
})
export class SetorGridComponent extends GenericGridComponent 
{
    protected form = SetorCardComponent;
    
    constructor(public service: SetorService, protected dialog: MatDialog) 
    {
        super();
        this.displayedColumns = ['id', 'nome', 'actions'];
    }
}
