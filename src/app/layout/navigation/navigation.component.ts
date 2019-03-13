import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    logged_user = '';

    constructor() 
    { 
        
    }

    ngOnInit() 
    {
        if (localStorage.getItem('user_name'))
            this.logged_user = localStorage.getItem('user_name');
    }

}
