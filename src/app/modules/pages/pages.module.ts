import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage/landpage.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LandpageComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
