import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  MatDialogModule
} from '@angular/material';

import { SetorIndexComponent } from './setor-index/setor-index.component';
import { SetorCreateComponent } from './setor-create/setor-create.component';
import { SetorService } from './setor.service';
import { SetorShowComponent } from './setor-show/setor-show.component';
import { SetorEditComponent } from './setor-edit/setor-edit.component';
import { SetorDeleteConfirmComponent } from './setor-delete-confirm/setor-delete-confirm.component';

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
    MatDialogModule
  ],
  entryComponents: [
    SetorDeleteConfirmComponent
  ],
  providers: [
    SetorService
  ]
})
export class SetorModule { }
