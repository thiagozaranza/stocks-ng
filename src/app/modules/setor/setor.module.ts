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
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';

import { SetorIndexComponent } from './setor-index/setor-index.component';
import { SetorCreateComponent } from './setor-create/setor-create.component';
import { SetorService } from './setor.service';
import { SetorShowComponent } from './setor-show/setor-show.component';
import { SetorEditComponent } from './setor-edit/setor-edit.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AlertComponent } from 'src/app/modules/layout/alert/alert.component';
import { SetorGridComponent } from './setor-components/setor-grid/setor-grid.component';
import { SetorFilterComponent } from './setor-components/setor-filter/setor-filter.component';
import { DeleteConfirmComponent } from 'src/app/shared/components/crud/delete-confirm/delete-confirm.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SetorIndexComponent, 
    SetorCreateComponent, 
    SetorShowComponent, 
    SetorEditComponent, 
    DeleteConfirmComponent, 
    SetorGridComponent,
    SetorFilterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
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
  entryComponents: [

    AlertComponent,
    DeleteConfirmComponent
  ],
  providers: [
    SetorService
  ]
})
export class SetorModule { }
