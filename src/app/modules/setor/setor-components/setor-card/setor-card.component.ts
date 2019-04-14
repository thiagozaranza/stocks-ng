import { Component, OnInit } from '@angular/core';
import { SetorService } from '../../setor.service';
import { MatDialog } from '@angular/material';
import { GenericCardComponent } from 'src/app/shared/generics/generic-card.component';

@Component({
    selector: 'app-setor-card',
    templateUrl: './setor-card.component.html',
    styleUrls: ['./setor-card.component.scss']
})
export class SetorCardComponent extends GenericCardComponent {

    constructor(public service: SetorService, protected dialog: MatDialog) { 
        super()
    }

    ngOnInit() {
    }
}
