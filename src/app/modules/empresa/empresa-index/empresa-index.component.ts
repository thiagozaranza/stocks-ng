import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { SetorDeleteConfirmComponent } from '../../setor/setor-delete-confirm/setor-delete-confirm.component';
import { EmpresaService } from '../empresa.service';
import { EmpresaSelectSetorialComponent } from '../empresa-components/empresa-select-setorial/empresa-select-setorial.component';
import { isSubsetor } from '../../subsetor/subsetor';
import { isSegmento } from '../../segmento/segmento';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.scss']
})
export class EmpresaIndexComponent extends IndexComponent implements OnInit 
{
    constructor(
        protected router: Router, 
        protected dialog: MatDialog,
        protected service: EmpresaService, 
    ) { 
        super();
        
        this.resourceName = 'empresa';
        this.mainFieldFilterName = 'nome';
        this.displayedColumns = ['id', 'nome', 'subsegmento', 'codigo', 'setor', 'actions'];
        this.deleteConfirmComponent = SetorDeleteConfirmComponent;
        this.with = ['segmento-subsetor-setor'];
    }

    @ViewChild('filterNome') filter_nome:ElementRef;
    @ViewChild('selectSetorial') select_setorial:EmpresaSelectSetorialComponent;

    onDeleteSuccess(response) 
    {
        this.clean();
    }

    ngOnInit() 
    {
        super.ngOnInit();

        this.select_setorial.callComponentSelectSetorial$.subscribe((changed) => {
            this.service.removeFilter('segmento-subsetor-setor');
            this.service.removeFilter('segmento-subsetor');
            this.service.removeFilter('segmento');
            
            if (isSubsetor(changed))
                this.service.addFilter('segmento-subsetor', changed.id);
            else if (isSegmento(changed))
                this.service.addFilter('segmento', changed.id);
            else
                this.service.addFilter('segmento-subsetor-setor', changed.id);

            this.getServerData();
        })
    }

    protected clean() 
    {
        super.clean();
        this.select_setorial.clean();
    }
}
