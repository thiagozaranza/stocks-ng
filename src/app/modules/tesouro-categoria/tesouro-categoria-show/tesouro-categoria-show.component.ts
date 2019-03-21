import { Component, OnInit } from '@angular/core';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { TesouroCategoria } from '../tesouro-categoria';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import * as categoriaFactory from '../../tesouro-categoria/tesouro-categoria.factory';
import { TesouroCategoriaService } from '../tesouro-categoria.service';

@Component({
  selector: 'app-tesouro-categoria-show',
  templateUrl: './tesouro-categoria-show.component.html',
  styleUrls: ['./tesouro-categoria-show.component.scss']
})
export class TesouroCategoriaShowComponent extends ShowComponent implements OnInit {

  protected categoria: TesouroCategoria;

  public displayedTiposColumns: string[] = ['id', 'codigo', 'nome', 'actions'];
  public dataSourceTipos = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: TesouroCategoriaService) 
  { 
      super();
      
      this.resourceName = 'tesouro-categoria';
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.categoria = categoriaFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.categoria = response.data;
      this.dataSourceTipos = response.data.tipos;
  }

  showTipo(empresa_id: number): void
  {
      this.router.navigate(['/tesouro-tipo/' + empresa_id]);
  }

}
