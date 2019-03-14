import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { RootComponent }            from './root/root.component';
import { NavigationComponent }      from './navigation/navigation.component';
import { FooterComponent }          from './footer/footer.component';
import { HeaderComponent }          from './header/header.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule, 
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    RootComponent,    
    NavigationComponent, 
    FooterComponent, 
    AlertComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    AlertComponent
  ]
})
export class LayoutModule { }
