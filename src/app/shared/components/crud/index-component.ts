import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Restfy } from '../../restfy.decorator';
import { GridComponent } from './grid-component';
import { FilterComponent } from './filter-component';

@Restfy()

export class IndexComponent implements OnInit
{    
    protected service;
    protected router: Router;
    protected dialog;

    protected deleteConfirmComponent;

    grid: GridComponent;
    filter: FilterComponent;

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