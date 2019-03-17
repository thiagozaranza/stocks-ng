import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IndiceService } from '../indice.service';

@Component({
    selector: 'app-indice-index',
    templateUrl: './indice-index.component.html',
    styleUrls: ['./indice-index.component.scss']
})

export class IndiceIndexComponent extends IndexComponent implements OnInit  {

    constructor(protected router: Router, protected service: IndiceService, protected dialog: MatDialog) 
    { 
        super();
        
        this.resourceName = 'indice';
        this.mainFieldFilterName = 'nome';
        this.displayedColumns = ['id', 'nome', 'titulo', 'actions'];
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
