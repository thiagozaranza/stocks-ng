import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetorService } from '../setor.service';

@Component({
  selector: 'app-setor-edit',
  templateUrl: './setor-edit.component.html',
  styleUrls: ['./setor-edit.component.scss']
})
export class SetorEditComponent implements OnInit {

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
