import { Component, OnInit } from '@angular/core';
import { Segmento } from '../segmento';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { SubsetorService } from '../../subsetor/subsetor.service';
import * as segmentoFactory from '../segmento.factory';
import { SegmentoService } from '../segmento.service';

@Component({
  selector: 'app-segmento-show',
  templateUrl: './segmento-show.component.html',
  styleUrls: ['./segmento-show.component.scss']
})
export class SegmentoShowComponent extends ShowComponent implements OnInit {

  protected segmento: Segmento;

  public displayedSegmentosColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceEmpresas = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: SegmentoService) 
  { 
      super();
      
      this.resourceName = 'segmento';
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.segmento = segmentoFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.segmento = response.data;
      this.dataSourceEmpresas = response.data.empresas;
  }

  showEmpresa(empresa_id: number): void
  {
      this.router.navigate(['/empresa/' + empresa_id]);
  }
}
