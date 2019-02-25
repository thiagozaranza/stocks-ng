import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/modules/setor/setor';
import { SetorService } from '../setor.service';
import { BaseService } from 'src/app/shared/base.service';

const ELEMENT_DATA: Setor[] = [
  {id: 1, nome: '01/01/2011'},
  {id: 2, nome: '01/01/2011'},
  {id: 3, nome: '01/01/2011'},
  {id: 4, nome: '01/01/2011'},
  {id: 5, nome: '01/01/2011'},
  {id: 6, nome: '01/01/2011'},
  {id: 7, nome: '01/01/2011'},
  {id: 8, nome: '01/01/2011'},
  {id: 9, nome: '01/01/2011'},
  {id: 10, nome: '01/01/2011'},
];

@Component({
  selector: 'app-setor-index',
  templateUrl: './setor-index.component.html',
  styleUrls: ['./setor-index.component.scss']
})

export class SetorIndexComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource = ELEMENT_DATA;

  constructor(protected service: SetorService) { 
    
  }

  ngOnInit() {

    console.log('SetorIndexComponent ngOnInit()');

    this.service.page(1).index((response) => {
      this.dataSource = response.list;
    });
    //index({});

    //this.service.page(1);

    //console.log(this.service.index({}));
  }

}
