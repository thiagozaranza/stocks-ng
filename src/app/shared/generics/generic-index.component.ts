import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { GenericGridComponent } from './generic-grid.component';
import { GenericFilterComponent } from './generic-filter.component';
import { BaseService } from '../services/base.service';
import { MatDialog } from '@angular/material';

export class GenericIndexComponent implements OnInit
{    
    protected service: BaseService;
    protected router: Router;
    protected dialog: MatDialog;

    protected deleteConfirmComponent;

    public grid: GenericGridComponent;
    public filter: GenericFilterComponent;

    ngOnInit() 
    {
        this.filter.callComponentFilter$.subscribe((filters) => {
            this.grid.filter(filters);
        });
    }
    
    clean () 
    {
        this.filter.clean();
        this.grid.clean();
    }
}