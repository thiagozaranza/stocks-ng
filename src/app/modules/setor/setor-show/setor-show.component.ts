import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from '../setor.service';

@Component({
  selector: 'app-setor-show',
  templateUrl: './setor-show.component.html',
  styleUrls: ['./setor-show.component.scss']
})
export class SetorShowComponent implements OnInit {

  constructor(private router: Router, protected service: SetorService) 
  { 
  }

  ngOnInit() 
  {
  }

  index()
  {
    this.router.navigate(['/setor']);
  }

}
