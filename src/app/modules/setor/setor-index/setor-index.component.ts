import { Component, ViewChild } from '@angular/core';

import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { SetorGridComponent } from '../setor-components/setor-grid/setor-grid.component';
import { SetorFilterComponent } from '../setor-components/setor-filter/setor-filter.component';

@Component({
    selector: 'app-setor-index',
    templateUrl: './setor-index.component.html',
    styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent extends IndexComponent
{
    @ViewChild('gridSetores')   grid:   SetorGridComponent;
    @ViewChild('filterSetores') filter: SetorFilterComponent;
}
