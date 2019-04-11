import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilterComponent } from 'src/app/shared/components/crud/filter-component';

@Component({
    selector: 'app-ativo-filter',
    templateUrl: './ativo-filter.component.html',
    styleUrls: ['./ativo-filter.component.scss']
})
export class AtivoFilterComponent extends FilterComponent 
{

}
