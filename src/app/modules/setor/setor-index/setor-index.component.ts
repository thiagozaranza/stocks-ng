import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Router } from "@angular/router"
import { isNull } from 'util';
import { 
  PageEvent, 
  Sort, 
  MatSort, 
  MatTableDataSource,
  MatDialog
} from '@angular/material';

import { SetorService } from '../setor.service';
import { SetorDeleteConfirmComponent } from '../setor-delete-confirm/setor-delete-confirm.component';

@Component({
  selector: 'app-setor-index',
  templateUrl: './setor-index.component.html',
  styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'actions'];
  dataSource = new MatTableDataSource();

  total_pages: number;
  page_size:number;

  constructor(private router: Router, protected service: SetorService, public dialog: MatDialog) { 

  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filterNome') filter_nome:ElementRef;

  ngOnInit() 
  {
    this.dataSource.sort = this.sort;
    this.service.clean();
    this.getServerData(null);
    this.filter_nome.nativeElement.focus();
  }

  create(): void
  {
    this.router.navigate(['/setor/create']);
  }

  show(id: number): void
  {
    this.router.navigate(['/setor/' + id]);
  }

  edit(id: number): void
  {
    this.router.navigate(['/setor/' + id + '/edit']);
  }

  delete(id: number): void
  {
    const dialogRef = this.dialog.open(SetorDeleteConfirmComponent, {
      width: '400px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.delete(id);      
    });
  }

  destroy(id: number): void
  {
    this.service.destroy((response) => {
      this.dataSource.data = response.data;
    });
  }

  index(): void 
  {
    this.service.index((response) => {
      this.dataSource.data = response.data.list;
      this.total_pages = response.data.total_results;
      this.page_size = response.meta.request.query_params.paginator.limit;
    });
  }

  filterByNome(filterValue: string): void 
  {
    let nome = filterValue.trim().toLowerCase();

    this.service.addFilter('nome', nome);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.index();
    } else if (event.which === 27) {
      console.log('Esc');
      this.filter_nome.nativeElement.value = '';
      this.service.cleanFilters();
    }
  }

  cleanFilter(): void 
  {
    this.filter_nome.nativeElement.value = '';
    this.service.cleanFilters();
    this.filter_nome.nativeElement.focus();
    this.index();
  }

  public getServerData(event?:PageEvent): PageEvent 
  {
    if (!isNull(event)) {
      this.service
        .page(event.pageIndex + 1)
        .limit(event.pageSize);
    }

    this.index();

    return event;
  }

  public sortData(sort: Sort) 
  {
    if (!sort.active || sort.direction === '') {
      console.log(sort.active);
      console.log(sort.direction);
      return;
    } 
  }
}
