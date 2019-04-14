import { NgModule } from '@angular/core';

import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { MatIconModule, MatButtonModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { ModuleNavigationComponent } from './components/module-navigation/module-navigation.component';
import { IndexButtonComponent } from './components/index-button/index-button.component';

@NgModule({
    declarations: [
        AlertComponent,
        DeleteButtonComponent,
        DeleteConfirmComponent,
        EditButtonComponent,
        ShowButtonComponent,
        CreateButtonComponent,
        ModuleNavigationComponent,
        IndexButtonComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule
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
        ModuleNavigationComponent
    ]
})
export class SharedModule { }
