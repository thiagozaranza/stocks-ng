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
        MatCardModule
    ]
})
export class AuthModule { }
