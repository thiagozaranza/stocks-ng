import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

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

import { SetorIndexComponent } from './setor-index/setor-index.component';
import { SetorCreateComponent } from './setor-create/setor-create.component';
import { SetorService } from './setor.service';
import { SetorShowComponent } from './setor-show/setor-show.component';
import { SetorEditComponent } from './setor-edit/setor-edit.component';
import { SetorDeleteConfirmComponent } from './setor-delete-confirm/setor-delete-confirm.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AlertComponent } from 'src/app/layout/alert/alert.component';

@NgModule({
  declarations: [
    SetorIndexComponent, 
    SetorCreateComponent, 
    SetorShowComponent, 
    SetorEditComponent, 
    SetorDeleteConfirmComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
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
    MatCardModule
  ],
  entryComponents: [
    SetorDeleteConfirmComponent,
    AlertComponent
  ],
  providers: [
    SetorService
  ]
})
export class SetorModule { }
