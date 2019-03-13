import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    logged_user = '';

    constructor(private authService: AuthService) 
    { 
        this.authService.callAuthService$.subscribe((user) => {
            this.logged_user = (user)? user['name'] : 'Visitante';
        });
    }

    ngOnInit() 
    {
        if (localStorage.getItem('user_name'))
            this.logged_user = localStorage.getItem('user_name');
    }

    logout()
    {
        this.authService.logout();
    }
}
