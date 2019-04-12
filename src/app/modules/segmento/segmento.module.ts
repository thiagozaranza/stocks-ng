import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentoShowComponent } from './segmento-show/segmento-show.component';
import { SegmentoIndexComponent } from './segmento-index/segmento-index.component';
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
import { SegmentoService } from './segmento.service';

@NgModule({
  declarations: [SegmentoShowComponent, SegmentoIndexComponent],
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
    SegmentoService
  ]
})
export class SegmentoModule { }
