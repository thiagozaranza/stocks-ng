import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesouroTipoIndexComponent } from './tesouro-tipo-index/tesouro-tipo-index.component';
import { TesouroTipoShowComponent } from './tesouro-tipo-show/tesouro-tipo-show.component';
import { TesouroTipoService } from './tesouro-tipo.service';
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

@NgModule({
  declarations: [TesouroTipoIndexComponent, TesouroTipoShowComponent],
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
    TesouroTipoService
  ]
})
export class TesouroTipoModule { }
