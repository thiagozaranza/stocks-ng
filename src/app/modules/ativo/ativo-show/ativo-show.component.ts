import { Component, OnInit } from '@angular/core';
import { Ativo } from '../ativo';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { Router, ActivatedRoute } from '@angular/router';
import { AtivoService } from '../ativo.service';
import * as ativoFactory from '../../ativo/ativo.factory';
import * as empresaFactory from '../../empresa/empresa.factory';
import { Empresa } from '../../empresa/empresa';


@Component({
  selector: 'app-ativo-show',
  templateUrl: './ativo-show.component.html',
  styleUrls: ['./ativo-show.component.scss']
})
export class AtivoShowComponent extends ShowComponent implements OnInit {

  protected ativo: Ativo;
  protected empresa: Empresa;

  constructor(public router: Router, private route: ActivatedRoute, protected service: AtivoService) 
  { 
      super();
      
      this.resourceName = 'indice';
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.ativo = ativoFactory.create();
      this.empresa = empresaFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.ativo = response.data;
      this.empresa = response.data.empresa;
  }

}
