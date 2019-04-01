import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { SetorDeleteConfirmComponent } from '../../setor/setor-delete-confirm/setor-delete-confirm.component';
import { EmpresaGridComponent } from '../empresa-components/empresa-grid/empresa-grid.component';
import { EmpresaFilterComponent } from '../empresa-components/empresa-filter/empresa-filter.component';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.scss']
})
export class EmpresaIndexComponent extends IndexComponent implements OnInit 
{
    constructor(
        protected router: Router, 
        protected dialog: MatDialog
    ) { 
        super();
        
        this.deleteConfirmComponent = SetorDeleteConfirmComponent;
    }

    @ViewChild('filterEmpresas') filter_empresas: EmpresaFilterComponent;
    @ViewChild('gridEmpresas') grid_empresas: EmpresaGridComponent;

    onDeleteSuccess(response) 
    {
        this.clean();
    }

    ngOnInit() 
    {
        super.ngOnInit();

        this.filter_empresas.callComponentEmpresaFilter$.subscribe((filters) => {
            this.grid_empresas.service.setFilters(filters).page(1);
            this.grid_empresas.getServerData();
        });
    }

    protected clean() 
    {
        this.filter_empresas.clean();
        this.grid_empresas.clean();
    }
}
