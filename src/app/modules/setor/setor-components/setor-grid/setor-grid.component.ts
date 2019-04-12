import { Component } from '@angular/core';
import { GridComponent } from 'src/app/shared/components/crud/grid-component';
import { Router } from '@angular/router';
import { SetorService } from '../../setor.service';

@Component({
    selector: 'app-setor-grid',
    templateUrl: './setor-grid.component.html',
    styleUrls: ['./setor-grid.component.scss']
})
export class SetorGridComponent extends GridComponent {

    constructor(protected router: Router, protected service: SetorService) 
    {
        super();

        this.displayedColumns = ['id', 'nome', 'actions'];
    }
}
