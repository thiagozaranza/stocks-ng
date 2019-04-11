import { Component, OnInit } from '@angular/core';
import { GridComponent } from 'src/app/shared/components/crud/grid-component';
import { AtivoService } from '../../ativo.service';

@Component({
    selector: 'app-ativo-grid',
    templateUrl: './ativo-grid.component.html',
    styleUrls: ['./ativo-grid.component.scss']
})
export class AtivoGridComponent  extends GridComponent {

    constructor(protected service: AtivoService) 
    { 
        super();
        this.displayedColumns = ['id', 'codigo', 'empresa',  'actions'];
        this.with = ['empresa'];
    }

}
