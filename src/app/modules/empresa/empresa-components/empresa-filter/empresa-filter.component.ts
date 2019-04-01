import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpresaSelectSetorialComponent } from '../empresa-select-setorial/empresa-select-setorial.component';
import { Subject } from 'rxjs';
import { isSubsetor } from 'src/app/modules/subsetor/subsetor';
import { isSegmento } from 'src/app/modules/segmento/segmento';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-empresa-filter',
  templateUrl: './empresa-filter.component.html',
  styleUrls: ['./empresa-filter.component.scss']
})
export class EmpresaFilterComponent implements OnInit {

    private filters: object = {};
    private tipos: string[];

    private callComponentEmpresaFilter = new Subject<any>();
    public  callComponentEmpresaFilter$ = this.callComponentEmpresaFilter.asObservable();

    @ViewChild('filterNome') filter_nome:ElementRef;
    @ViewChild('filterTipo') filter_tipo:MatSelect;
    @ViewChild('selectSetorial') select_setorial:EmpresaSelectSetorialComponent;

    constructor() 
    { 
        this.tipos = ["","CI","CI MB","DR3","DRN","M2","MA","MB","N1","N2","NM","ON","ON MA","ON N1","ON N2",
        "ON NM","PN","PNA","PNA N1","PNB","PNB N1","PN N1","PN N2","UNT","UNT N2"];

    }

    ngOnInit() 
    {
        this.filter_nome.nativeElement.focus();

        this.select_setorial.callComponentSelectSetorial$.subscribe((changed) => {
            this.filters['segmento-subsetor-setor'] = null;
            this.filters['segmento-subsetor'] = null;
            this.filters['segmento'] = null;
            
            if (isSubsetor(changed))
                this.filters['segmento-subsetor'] = changed.id;
            else if (isSegmento(changed))
                this.filters['segmento'] = changed.id;
            else
                this.filters['segmento-subsetor-setor'] = changed.id;

            this.filter();
        });
    }

    filterByNome(filterValue: string): void 
    {
        let nome = filterValue.trim().toLowerCase();

        this.filters['nome'] = nome;
    }

    changeTipo(event) {
        this.filters['subsegmento-eq'] = event.value;
        this.filter();
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
        this.filter_tipo.value = '';
        this.filter_nome.nativeElement.focus();
    }

    public filter(): void
    {
        this.callComponentEmpresaFilter.next(this.filters);
    }

    public reset(): void
    {
        this.clean();
        this.select_setorial.clean();
        this.filters = {};

        this.filter();
    }
}
