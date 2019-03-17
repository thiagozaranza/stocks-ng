import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AtivoService } from '../ativo.service';

@Component({
  selector: 'app-ativo-index',
  templateUrl: './ativo-index.component.html',
  styleUrls: ['./ativo-index.component.scss']
})
export class AtivoIndexComponent extends IndexComponent implements OnInit  {

  constructor(protected router: Router, protected service: AtivoService, protected dialog: MatDialog) 
  { 
      super();
      
      this.resourceName = 'ativo';
      this.mainFieldFilterName = 'nome';
      this.displayedColumns = ['id', 'codigo', 'empresa',  'actions'];
      this.with = ['empresa'];
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
