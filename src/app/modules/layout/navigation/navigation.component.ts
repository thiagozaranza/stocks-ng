import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    logged_user = '';
    logged_user_id = null;

    constructor(private authService: AuthService) 
    { 
        this.authService.callAuthService$.subscribe((user) => {
            this.logged_user = (user)? user['name'] : 'Visitante';
            this.logged_user_id = (user)? user['id'] : null;
        });
    }

    ngOnInit() 
    {
        if (localStorage.getItem('user_name') != 'null') {
            this.logged_user = localStorage.getItem('user_name');
            this.logged_user_id = localStorage.getItem('user_id');
        } else {
            this.logged_user = 'Visitante';
            this.logged_user_id = null;
        }
    }

    logout()
    {
        this.authService.logout();
    }

    login()
    {
        this.authService.login();
    }
}
