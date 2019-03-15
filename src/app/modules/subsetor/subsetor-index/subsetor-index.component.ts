import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexComponent } from 'src/app/shared/components/crud/index-component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SubsetorService } from '../subsetor.service';

@Component({
  selector: 'app-subsetor-index',
  templateUrl: './subsetor-index.component.html',
  styleUrls: ['./subsetor-index.component.scss']
})
export class SubsetorIndexComponent extends IndexComponent implements OnInit  {

  constructor(protected router: Router, protected service: SubsetorService, protected dialog: MatDialog) 
  { 
      super();
      
      this.resourceName = 'subsetor';
      this.mainFieldFilterName = 'nome';
      this.displayedColumns = ['id', 'nome', 'setor', 'actions'];
      this.with = ['setor'];
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
