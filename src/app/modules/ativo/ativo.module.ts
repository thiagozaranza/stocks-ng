import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoIndexComponent } from './ativo-index/ativo-index.component';
import { AtivoShowComponent } from './ativo-show/ativo-show.component';
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
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtivoService } from './ativo.service';
import { AtivoGridComponent } from './ativo-components/ativo-grid/ativo-grid.component';
import { AtivoFilterComponent } from './ativo-components/ativo-filter/ativo-filter.component';

@NgModule({
  declarations: [AtivoIndexComponent, AtivoShowComponent, AtivoGridComponent, AtivoFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [
    AtivoService
  ]
})
export class AtivoModule { }
