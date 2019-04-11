import { MatTableDataSource, PageEvent, MatSort, Sort } from '@angular/material';
import { OnInit, ViewChild } from '@angular/core';
import { Restfy } from '../../restfy.decorator';
import { isNull } from 'util';

@Restfy()

export class GridComponent implements OnInit
{    
    protected service;

    public dataSource = new MatTableDataSource();

    public total_pages: number;
    public page_size:number;
    public displayedColumns: string[];

    protected with;

    public loading: boolean;

    @ViewChild(MatSort) sort: MatSort;

    constructor() { 
        this.loading = false;
    }

    ngOnInit() 
    {
        this.dataSource.sort = this.sort;
        this.service.clean();
        this.getServerData(null);
    }

    public onListSuccess(response): void 
    {
        this.dataSource.data = response.data.list;
        this.total_pages = response.data.total_results;
        this.page_size = response.meta.request.query_params.paginator.limit;

        this.loading = false;
    }

    public getServerData(event?:PageEvent): PageEvent 
    {
        this.loading = true;

        if (!isNull(event) && event) {
            this.service
                .page(event.pageIndex + 1)
                .limit(event.pageSize)
        }

        this.service.with(this.with);

        this['list']();

        return event;
    }

    public clean()
    {
        this.service.clean();
        this['list']();
    }

    protected sortData(sort: Sort) 
    {
        if (!sort.active || sort.direction === '') {
            console.log(sort.active);
            console.log(sort.direction);
            return;
        } 
    }

    public filter(filters) 
    {
        this.service.setFilters(filters).page(1);
        this.getServerData();
    }
}