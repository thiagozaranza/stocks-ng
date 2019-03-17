import { MatTableDataSource, MatDialog, MatSort, Sort, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { ViewChild, ElementRef, OnInit } from '@angular/core';
import { isNull } from 'util';
import { Restfy } from '../../restfy.decorator';

@Restfy()

export class IndexComponent implements OnInit
{    
    public dataSource = new MatTableDataSource();

    public total_pages: number;
    public page_size:number;
    public displayedColumns: string[];

    protected resourceName;
    protected service;
    protected router: Router;
    protected dialog;

    protected deleteConfirmComponent;
    protected filter_nome:ElementRef;
    protected mainFieldFilterName: string;

    public loading: boolean;

    protected with;

    constructor() { 
        this.loading = false;
    }

    ngOnInit() 
    {
        this.dataSource.sort = this.sort;
        this.service.clean();
        this.getServerData(null);
        this.filter_nome.nativeElement.focus();
    }

    @ViewChild(MatSort) sort: MatSort;
    
    onListSuccess(response): void 
    {
        this.dataSource.data = response.data.list;
        this.total_pages = response.data.total_results;
        this.page_size = response.meta.request.query_params.paginator.limit;

        this.loading = false;
    }

    destroy(id: number): void
    {
        this.service.destroy(id, (response) => {
            //this.dataSource.data = response.data;
        });
    }

    confirmDelete(id: number): void
    {
        const dialogRef = this.dialog.open(this.deleteConfirmComponent, {
            width: '400px',
            data: {id: id}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                this.destroy(id);      
        });
    }

    filterByNome(filterValue: string): void 
    {
        let nome = filterValue.trim().toLowerCase();

        this.service.addFilter(this.mainFieldFilterName, nome);
    }

    onKeydown(event) {
        if (event.key === "Enter") {
            this['list']();
        } else if (event.which === 27) {
            this.filter_nome.nativeElement.value = '';
            this.service.cleanFilters();
        }
    }

    protected clean(): void 
    {
        this.filter_nome.nativeElement.value = '';
        this.service.clean();
        this.filter_nome.nativeElement.focus();
        this['list']();
    }

    public getServerData(event?:PageEvent): PageEvent 
    {
        this.loading = true;

        if (!isNull(event)) {
            this.service
                .page(event.pageIndex + 1)
                .limit(event.pageSize)
                
        }

        this.service.with(this.with);

        this['list']();

        return event;
    }

    protected sortData(sort: Sort) 
    {
        if (!sort.active || sort.direction === '') {
            console.log(sort.active);
            console.log(sort.direction);
            return;
        } 
    }
}