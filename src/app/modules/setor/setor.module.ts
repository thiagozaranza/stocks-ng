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
import { SetorGridComponent } from './setor-components/setor-grid/setor-grid.component';
import { SetorFilterComponent } from './setor-components/setor-filter/setor-filter.component';
import { DeleteConfirmComponent } from 'src/app/shared/components/delete-confirm/delete-confirm.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { SetorFormComponent } from './setor-components/setor-form/setor-form.component';
import { SetorCardComponent } from './setor-components/setor-card/setor-card.component';
import { ModalActionComponent } from 'src/app/shared/components/modal-action/modal-action.component';

@NgModule({
    declarations: [
        SetorIndexComponent, 
        SetorCreateComponent, 
        SetorShowComponent, 
        SetorEditComponent, 
        SetorGridComponent,
        SetorFilterComponent,
        SetorFormComponent,
        SetorCardComponent
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
        DeleteConfirmComponent,
        ModalActionComponent
    ],
    providers: [
        SetorService
    ],
    exports: [
        SetorCardComponent
    ]

})
export class SetorModule { }
