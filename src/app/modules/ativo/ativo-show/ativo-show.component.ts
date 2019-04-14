import { Component, OnInit } from '@angular/core';
import { Ativo } from '../ativo';
import { GenericShowComponent } from 'src/app/shared/generics/generic-show.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AtivoService } from '../ativo.service';
import * as ativoFactory from '../../ativo/ativo.factory';
import * as empresaFactory from '../../empresa/empresa.factory';
import { Empresa } from '../../empresa/empresa';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ativo-show',
  templateUrl: './ativo-show.component.html',
  styleUrls: ['./ativo-show.component.scss']
})
export class AtivoShowComponent extends GenericShowComponent implements OnInit 
{
    protected ativo: Ativo;
    protected empresa: Empresa;

    constructor(protected service: AtivoService, protected route: ActivatedRoute, protected dialog: MatDialog) 
    { 
        super();
        
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.ativo = ativoFactory.create();
        this.empresa = empresaFactory.create();
    }

    ngOnInit() 
    {
        super.ngOnInit();
    }
}
