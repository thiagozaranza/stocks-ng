import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material'; 
import { SetorService } from '../setor.service';
import * as setorFactory from '../setor.factory';
import { Setor } from '../setor';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';

@Component({
    selector: 'app-setor-show',
    templateUrl: './setor-show.component.html', 
    styleUrls: ['./setor-show.component.scss']
})

export class SetorShowComponent extends ShowComponent implements OnInit {

    private setor: Setor;

    public displayedSubsetoresColumns: string[] = ['id', 'nome', 'actions'];
    public dataSourceSubsetores = new MatTableDataSource();

    constructor(public router: Router, private route: ActivatedRoute, protected service: SetorService) 
    { 
        super();
        
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.setor = setorFactory.create();
    }

    ngOnInit() 
    {
        super.ngOnInit();
    }

    onPickSuccess(response)
    {
        this.setor = response.data;
        this.dataSourceSubsetores = response.data.subsetores;
    }
 
    showSubsetor(subsetor_id: number): void
    {
        this.router.navigate(['/subsetor/' + subsetor_id]);
    }
}
