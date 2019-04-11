import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

export class FilterComponent implements OnInit
{
    private filters: object = {};

    private callComponentFilter = new Subject<any>();
    public  callComponentFilter$ = this.callComponentFilter.asObservable();

    @ViewChild('filterNome') filter_nome:ElementRef;

    ngOnInit(): void
    {
        this.filter_nome.nativeElement.focus();
    }    

    filterByNome(filterValue: string): void 
    {
        let nome = filterValue.trim().toLowerCase();

        this.filters['nome'] = nome;
    }
   
    onKeydown(event) {
        if (event.key === "Enter") {
            this.filter();
        } else if (event.which === 27) {
            this.filter_nome.nativeElement.value = '';
            this.clean();
        }
    }

    public clean(): void 
    {
        this.filter_nome.nativeElement.value = '';
        this.filter_nome.nativeElement.focus();
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