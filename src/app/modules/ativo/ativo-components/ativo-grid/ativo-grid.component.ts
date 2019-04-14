import { Component } from '@angular/core';
import { GenericGridComponent } from 'src/app/shared/generics/generic-grid.component';
import { AtivoService } from '../../ativo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ativo-grid',
    templateUrl: './ativo-grid.component.html',
    styleUrls: ['./ativo-grid.component.scss']
})
export class AtivoGridComponent extends GenericGridComponent 
{
    constructor(protected router: Router, protected service: AtivoService) 
    { 
        super();
        this.displayedColumns = ['id', 'codigo', 'empresa',  'actions'];
        this.with = ['empresa'];
    }
}
