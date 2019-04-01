import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { TesouroTipoService } from '../tesouro-tipo.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tesouro-tipo-index',
  templateUrl: './tesouro-tipo-index.component.html',
  styleUrls: ['./tesouro-tipo-index.component.scss']
})
export class TesouroTipoIndexComponent extends IndexComponent implements OnInit  {

  constructor(protected router: Router, protected service: TesouroTipoService, protected dialog: MatDialog) 
  { 
      super();
      
      this.mainFieldFilterName = 'nome';
      this.displayedColumns = ['id', 'codigo', 'nome', 'categoria', 'actions'];
      this.with = ['categoria']
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
