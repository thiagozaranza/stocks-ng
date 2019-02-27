import { Component, OnInit } from '@angular/core';
import { SetorService } from '../setor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setor-create',
  templateUrl: './setor-create.component.html',
  styleUrls: ['./setor-create.component.scss']
})
export class SetorCreateComponent implements OnInit {

  constructor(private router: Router, protected service: SetorService) { 

  }

  ngOnInit() {
  }

  index()
  {
    this.router.navigate(['/setor']);
  }

}
