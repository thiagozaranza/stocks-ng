import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { RootComponent }            from './root/root.component';
import { NavigationComponent }      from './navigation/navigation.component';
import { FooterComponent }          from './footer/footer.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule, 
  MatIconModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [
    RootComponent,    
    NavigationComponent, 
    FooterComponent, 
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
  ]
})
export class LayoutModule { }
