import { NgModule } from '@angular/core';

import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { MatIconModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatCardModule, MatDividerModule } from '@angular/material';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { ModuleNavigationComponent } from './components/module-navigation/module-navigation.component';
import { IndexButtonComponent } from './components/index-button/index-button.component';
import { ModalEditButtonComponent } from './components/modal-edit-button/modal-edit-button.component';
import { ModalActionComponent } from './components/modal-action/modal-action.component';
import { ModalHolderDirective } from './directives/modal-holder.directive';

@NgModule({
    declarations: [
        AlertComponent,
        DeleteButtonComponent,
        DeleteConfirmComponent,
        EditButtonComponent,
        ShowButtonComponent,
        CreateButtonComponent,
        ModuleNavigationComponent,
        IndexButtonComponent,
        ModalEditButtonComponent,
        ModalActionComponent,
        ModalHolderDirective
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule
    ],
    entryComponents: [

    ],
    providers: [
        
    ],
    exports: [
        DeleteButtonComponent,
        EditButtonComponent,
        ShowButtonComponent,
        CreateButtonComponent,
        ModuleNavigationComponent,
        ModalEditButtonComponent
    ]
})
export class SharedModule { }
