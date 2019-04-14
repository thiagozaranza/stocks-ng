import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetorService } from '../setor.service';
import * as setorFactory from '../setor.factory';
import { Setor } from '../setor';
import { GenericShowComponent } from 'src/app/shared/generics/generic-show.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-setor-show',
    templateUrl: './setor-show.component.html', 
    styleUrls: ['./setor-show.component.scss']
})

export class SetorShowComponent extends GenericShowComponent implements OnInit {

    protected element: Setor;

    constructor(protected service: SetorService, protected route: ActivatedRoute, protected dialog: MatDialog) 
    { 
        super();
        this.element = setorFactory.create();
    }

    ngOnInit() 
    {
        super.ngOnInit();
    }
}
