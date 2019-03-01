import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material'; 

import { SetorService } from '../setor.service';
import * as setorFactory from '../setor.factory';
import { Setor } from '../setor';
import { RestNavigation } from 'src/app/shared/rest-navigation.decorator';

@Component({
  selector: 'app-setor-show',
  templateUrl: './setor-show.component.html',
  styleUrls: ['./setor-show.component.scss']
})

@RestNavigation('setor')

export class SetorShowComponent implements OnInit {

  private id: number;
  private setor: Setor;

  public displayedSubsetoresColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceSubsetores = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: SetorService) 
  { 
    this.setor = setorFactory.create();
  }

  ngOnInit() 
  {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    
    this.service.show(this.id, (response) => {
      this.setor = response.data;
      this.dataSourceSubsetores.data = response.data.subsetores;
    });
  }

  showSubsetor(subsetor_id: number): void
  {
    this.router.navigate(['/subsetor/' + subsetor_id]);
  }
}
