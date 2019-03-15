import { Component, OnInit } from '@angular/core';
import { ShowComponent } from 'src/app/shared/components/crud/show-component';
import { Subsetor } from '../subsetor';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { SubsetorService } from '../subsetor.service';
import * as subsetorFactory from '../subsetor.factory';

@Component({
  selector: 'app-subsetor-show',
  templateUrl: './subsetor-show.component.html',
  styleUrls: ['./subsetor-show.component.scss']
})
export class SubsetorShowComponent extends ShowComponent implements OnInit {

  protected subsetor: Subsetor;

  public displayedSegmentosColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceSegmentos = new MatTableDataSource();

  constructor(public router: Router, private route: ActivatedRoute, protected service: SubsetorService) 
  { 
      super();
      
      this.resourceName = 'setor';
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.subsetor = subsetorFactory.create();
  }

  ngOnInit() 
  {
      super.ngOnInit();
  }

  onPickSuccess(response)
  {
      this.subsetor = response.data;
      this.dataSourceSegmentos = response.data.segmentos;
  }

  showSegmentos(segmento_id: number): void
  {
      this.router.navigate(['/segmento/' + segmento_id]);
  }
}
