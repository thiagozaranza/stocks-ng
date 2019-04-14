import { Component, ViewChild } from '@angular/core';

import { GenericIndexComponent } from 'src/app/shared/generics/generic-index.component';
import { SetorGridComponent } from '../setor-components/setor-grid/setor-grid.component';
import { SetorFilterComponent } from '../setor-components/setor-filter/setor-filter.component';
import { SetorService } from '../setor.service';

@Component({
    selector: 'app-setor-index',
    templateUrl: './setor-index.component.html',
    styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent extends GenericIndexComponent
{
    @ViewChild('gridSetores')   grid:   SetorGridComponent;
    @ViewChild('filterSetores') filter: SetorFilterComponent;

    constructor(public service: SetorService) 
    {
        super();
    }
}
