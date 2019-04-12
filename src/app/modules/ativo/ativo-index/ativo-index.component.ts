import { Component, ViewChild } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AtivoService } from '../ativo.service';
import { AtivoGridComponent } from '../ativo-components/ativo-grid/ativo-grid.component';
import { AtivoFilterComponent } from '../ativo-components/ativo-filter/ativo-filter.component';

@Component({
    selector: 'app-ativo-index',
    templateUrl: './ativo-index.component.html',
    styleUrls: ['./ativo-index.component.scss']
})
export class AtivoIndexComponent extends IndexComponent {

    @ViewChild('gridAtivos') grid: AtivoGridComponent;
    @ViewChild('filterAtivos') filter: AtivoFilterComponent;

    constructor(protected router: Router, protected service: AtivoService, protected dialog: MatDialog) 
    { 
        super();
    }
}
