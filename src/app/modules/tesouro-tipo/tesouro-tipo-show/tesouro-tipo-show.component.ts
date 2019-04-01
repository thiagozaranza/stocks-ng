import { Component, OnInit } from '@angular/core';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { TesouroTipo } from '../tesouro-tipo';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { TesouroTipoService } from '../tesouro-tipo.service';
import { TesouroCategoria } from '../../tesouro-categoria/tesouro-categoria';
import * as tesouroTipoFactory from '../../tesouro-tipo/tesouro-tipo.factory';
import * as tesouroCategoriaFactory from '../../tesouro-categoria/tesouro-categoria.factory';

@Component({
  selector: 'app-tesouro-tipo-show',
  templateUrl: './tesouro-tipo-show.component.html',
  styleUrls: ['./tesouro-tipo-show.component.scss']
})
export class TesouroTipoShowComponent extends ShowComponent implements OnInit {

  protected tipo: TesouroTipo;
  protected categoria: TesouroCategoria;

  public displayedTitulosColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceTitulos = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: TesouroTipoService) 
  { 
      super();
      
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.tipo = tesouroTipoFactory.create();
      this.categoria = tesouroCategoriaFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.tipo = response.data;
      this.categoria = response.data.categoria;
      this.dataSourceTitulos = response.data.titulos;
  }

  showTitulo(titulo_id: number): void
  {
      this.router.navigate(['/tesouro-titulo/' + titulo_id]);
  }

}
