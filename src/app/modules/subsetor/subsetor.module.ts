import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsetorIndexComponent } from './subsetor-index/subsetor-index.component';
import { SubsetorShowComponent } from './subsetor-show/subsetor-show.component';
import { SubsetorService } from './subsetor.service';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule, 
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    SubsetorIndexComponent, 
    SubsetorShowComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule, 
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [
    SubsetorService
  ]
})
export class SubsetorModule { }
