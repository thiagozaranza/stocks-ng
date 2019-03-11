import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router"
import { 
  MatDialog
} from '@angular/material';

import { SetorService } from '../setor.service';
import { SetorDeleteConfirmComponent } from '../setor-delete-confirm/setor-delete-confirm.component';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';

@Component({
    selector: 'app-setor-index',
    templateUrl: './setor-index.component.html',
    styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent extends IndexComponent implements OnInit  {

    constructor(protected router: Router, protected service: SetorService, protected dialog: MatDialog) 
    { 
        super();
        
        this.resourceName = 'setor';
        this.mainFieldFilterName = 'nome';
        this.displayedColumns = ['id', 'nome', 'actions'];
        this.deleteConfirmComponent = SetorDeleteConfirmComponent;
    }

    @ViewChild('filterNome') filter_nome:ElementRef;

    onDeleteSuccess(response) 
    {
        this.clean();
    }

    ngOnInit() 
    {
        super.ngOnInit()
    }
}
