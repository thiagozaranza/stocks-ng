import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetorService } from '../setor.service';
import { Setor } from '../setor';
import { 
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'app-setor-show',
  templateUrl: './setor-show.component.html',
  styleUrls: ['./setor-show.component.scss']
})
export class SetorShowComponent implements OnInit {

  private id: number;
  private setor: Setor;

  public displayedSubsetoresColumns: string[] = ['id', 'nome', 'actions'];
  public dataSourceSubsetores = new MatTableDataSource();

  constructor(private router: Router, private route: ActivatedRoute, protected service: SetorService) 
  { 
    this.setor = {
      id: null,
      nome: null,
      subsetores: null,
      created_at: null,
      created_by: null,
      updated_at: null,
      updated_by: null,
    }
  }

  ngOnInit() 
  {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.show(this.id, (response) => {
      this.setor = response.data;
      this.dataSourceSubsetores.data = response.data.subsetores;
    });
  }

  index()
  {
    this.router.navigate(['/setor']);
  }

  create()
  {
    this.router.navigate(['/setor/create']);
  }

  edit()
  {
    this.router.navigate(['/setor/' + this.id + '/edit']);
  }

  showSubsetor(subsetor_id: number): void
  {
    this.router.navigate(['/subsetor/' + subsetor_id]);
  }
}
