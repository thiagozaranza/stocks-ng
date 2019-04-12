import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router"
import { 
  MatDialog
} from '@angular/material';

import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { SetorGridComponent } from '../setor-components/setor-grid/setor-grid.component';
import { SetorFilterComponent } from '../setor-components/setor-filter/setor-filter.component';
import { SetorService } from '../setor.service';

@Component({
    selector: 'app-setor-index',
    templateUrl: './setor-index.component.html',
    styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent extends IndexComponent implements OnInit  {

    @ViewChild('gridSetores') grid: SetorGridComponent;
    @ViewChild('filterSetores') filter: SetorFilterComponent;

    constructor(protected router: Router, protected service: SetorService, protected dialog: MatDialog) 
    { 
        super();
    }
}
