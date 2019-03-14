import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDividerModule, 
    MatCardModule 
} from '@angular/material';

import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
    declarations: [
        LoginComponent, 
        JoinComponent, 
        ForgotComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule, 
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
    ],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class AuthModule { }
