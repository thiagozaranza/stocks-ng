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
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    EmpresaIndexComponent,
    EmpresaCreateComponent,
    EmpresaEditComponent,
    EmpresaShowComponent],
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
  ]
})
export class EmpresaModule { }
