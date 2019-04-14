import { Component } from '@angular/core';
import { GenericFilterComponent } from 'src/app/shared/generics/generic-filter.component';

@Component({
    selector: 'app-ativo-filter',
    templateUrl: './ativo-filter.component.html',
    styleUrls: ['./ativo-filter.component.scss']
})
export class AtivoFilterComponent extends GenericFilterComponent
{

}
