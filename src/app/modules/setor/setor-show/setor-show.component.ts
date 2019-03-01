import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material'; 

import { SetorService } from '../setor.service';
import * as setorFactory from '../setor.factory';
import { Setor } from '../setor';
import { Restfy } from 'src/app/shared/restfy.decorator';
import { SubsetorShowComponent } from '../../subsetor/subsetor-show/subsetor-show.component';
import { showRequest } from 'src/app/shared/show-request.decorator';

@Component({
  selector: 'app-setor-show',
  templateUrl: './setor-show.component.html',
  styleUrls: ['./setor-show.component.scss']
})

@Restfy('setor')

export class SetorShowComponent implements OnInit {

  private id: number;
  private setor: Setor;

  public displayedSubsetoresColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceSubsetores = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: SetorService) 
  { 
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.setor = setorFactory.create();
  }

  @showRequest(this.id)

  ngOnInit() 
  {
    
  }

  showSubsetor(subsetor_id: number): void
  {
    this.router.navigate(['/subsetor/' + subsetor_id]);
  }
}
