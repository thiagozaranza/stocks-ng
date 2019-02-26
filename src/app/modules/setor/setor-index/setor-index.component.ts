import { Component, OnInit, ViewChild } from '@angular/core';
import { SetorService } from '../setor.service';
import { PageEvent, Sort, MatSort, MatTableDataSource } from '@angular/material';
import { isNull } from 'util';

@Component({
  selector: 'app-setor-index',
  templateUrl: './setor-index.component.html',
  styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource();

  total_pages: number;
  page_size:number;

  constructor(protected service: SetorService) { 

  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.getServerData(null);

  }

  public getServerData(event?:PageEvent) {

    if (!isNull(event)) {
      this.service
        .page(event.pageIndex + 1)
        .limit(event.pageSize);
    }

    this.service.index((response) => {
      this.dataSource.data = response.data.list;
      this.total_pages = response.data.total_results;
      this.page_size = response.meta.request.query_params.paginator.limit;
    });

    return event;
  }

  public sortData(sort: Sort) {

    if (!sort.active || sort.direction === '') {
      console.log(sort.active);
      console.log(sort.direction);
      return;
    }
    
  }

}
