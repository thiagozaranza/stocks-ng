import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit 
{
    constructor(private router: Router) 
    { 

    }

    ngOnInit() 
    {
        localStorage.setItem('access_token', null);
        localStorage.setItem('user_name', null);
        localStorage.setItem('user_id', null);

        this.router.navigate(['/login']);  
    }

}
