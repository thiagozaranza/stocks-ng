import { Component, OnInit } from '@angular/core';
import { Indice } from '../indice';
import { MatTableDataSource } from '@angular/material';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { Router, ActivatedRoute } from '@angular/router';
import { SegmentoService } from '../../segmento/segmento.service';
import * as indiceFactory from '../../indice/indice.factory';
import { IndiceService } from '../indice.service';

@Component({
  selector: 'app-indice-show',
  templateUrl: './indice-show.component.html',
  styleUrls: ['./indice-show.component.scss']
})
export class IndiceShowComponent extends ShowComponent implements OnInit {

  protected indice: Indice;

  public displayedAtivosColumns: string[] = ['id', 'codigo', 'actions'];
  public dataSourceAtivos = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: IndiceService) 
  { 
      super();
      
      this.resourceName = 'indice';
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.indice = indiceFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.indice = response.data;
      this.dataSourceAtivos = response.data.ativos;
  }

  showEmpresa(empresa_id: number): void
  {
      this.router.navigate(['/empresa/' + empresa_id]);
  }

}
