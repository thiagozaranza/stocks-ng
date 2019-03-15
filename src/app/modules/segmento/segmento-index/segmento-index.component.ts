import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SegmentoService } from '../segmento.service';

@Component({
  selector: 'app-segmento-index',
  templateUrl: './segmento-index.component.html',
  styleUrls: ['./segmento-index.component.scss']
})

export class SegmentoIndexComponent extends IndexComponent implements OnInit  {

  constructor(protected router: Router, protected service: SegmentoService, protected dialog: MatDialog) 
  { 
      super();
      
      this.resourceName = 'segmento';
      this.mainFieldFilterName = 'nome';
      this.displayedColumns = ['id', 'nome', 'subsetor', 'actions'];
      this.with = ['subsetor'];
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
