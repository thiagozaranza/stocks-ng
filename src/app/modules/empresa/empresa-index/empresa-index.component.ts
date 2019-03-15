import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { SetorDeleteConfirmComponent } from '../../setor/setor-delete-confirm/setor-delete-confirm.component';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.scss']
})
export class EmpresaIndexComponent extends IndexComponent implements OnInit {

  constructor(protected router: Router, protected service: EmpresaService, protected dialog: MatDialog) 
    { 
        super();
        
        this.resourceName = 'empresa';
        this.mainFieldFilterName = 'nome';
        this.displayedColumns = ['id', 'nome', 'codigo', 'setor', 'actions'];
        this.deleteConfirmComponent = SetorDeleteConfirmComponent;
        this.with = ['segmento-subsetor-setor'];
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
