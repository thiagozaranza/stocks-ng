import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

export class GenericFilterComponent implements OnInit
{
    private filters: object = {};

    private callComponentFilter = new Subject<any>();
    public  callComponentFilter$ = this.callComponentFilter.asObservable();

    @ViewChild('mainFilter') main_filter:ElementRef;

    ngOnInit(): void
    {
        this.main_filter.nativeElement.focus();
    }    

    filterByNome(filterValue: string): void 
    {
        var field_name = (this.main_filter.nativeElement.name)? this.main_filter.nativeElement.name: 'nome';

        this.filters[field_name] = filterValue.trim().toLowerCase();
    }
   
    onKeydown(event) {
        if (event.key === "Enter") { 
            this.filter();
        } else if (event.which === 27) {
            this.main_filter.nativeElement.value = '';
            this.clean();
        }
    }

    public clean(): void 
    {
        this.main_filter.nativeElement.value = '';
        this.main_filter.nativeElement.focus();
    }

    public filter(): void
    {
        this.callComponentFilter.next(this.filters);
    }

    public reset(): void
    {
        this.clean();
        this.filters = {};

        this.filter();
    }
}