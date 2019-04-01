import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresaEditComponent } from './empresa-edit/empresa-edit.component';
import { EmpresaShowComponent } from './empresa-show/empresa-show.component';
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
import { EmpresaSelectSetorialComponent } from './empresa-components/empresa-select-setorial/empresa-select-setorial.component';
import { EmpresaGridComponent } from './empresa-components/empresa-grid/empresa-grid.component';
import { EmpresaFilterComponent } from './empresa-components/empresa-filter/empresa-filter.component';

@NgModule({
  declarations: [
    EmpresaIndexComponent,
    EmpresaCreateComponent,
    EmpresaEditComponent,
    EmpresaShowComponent,
    EmpresaSelectSetorialComponent,
    EmpresaGridComponent,
    EmpresaFilterComponent],
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
    MatCardModule,
    MatProgressBarModule
  ]
})
export class EmpresaModule { }
