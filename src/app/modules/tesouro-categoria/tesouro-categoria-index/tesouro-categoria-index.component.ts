import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { TesouroCategoriaService } from '../tesouro-categoria.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tesouro-categoria-index',
  templateUrl: './tesouro-categoria-index.component.html',
  styleUrls: ['./tesouro-categoria-index.component.scss']
})

export class TesouroCategoriaIndexComponent extends IndexComponent implements OnInit  {

  constructor(protected router: Router, protected service: TesouroCategoriaService, protected dialog: MatDialog) 
  { 
      super();
      
      this.resourceName = 'tesouro-categoria';
      this.mainFieldFilterName = 'nome';
      this.displayedColumns = ['id', 'nome', 'actions'];
  }

  @ViewChild('filterNome') filter_nome:ElementRef;

  ngOnInit() 
  {
      super.ngOnInit()
  }
}
