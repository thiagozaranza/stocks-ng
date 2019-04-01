import { Component } from '@angular/core';
import { EmpresaService } from '../../empresa.service';
import { Restfy } from 'src/app/shared/restfy.decorator';
import { GridComponent } from 'src/app/shared/components/crud/grid-component';

@Component({
  selector: 'app-empresa-grid',
  templateUrl: './empresa-grid.component.html',
  styleUrls: ['./empresa-grid.component.scss']
})

@Restfy()

export class EmpresaGridComponent extends GridComponent {

    constructor(public service: EmpresaService) 
    { 
        super();
        this.displayedColumns = ['id', 'nome', 'subsegmento', 'codigo', 'setor', 'actions'];
        this.with = ['segmento-subsetor-setor'];
    }
}
