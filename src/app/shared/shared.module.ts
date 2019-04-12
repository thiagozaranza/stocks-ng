import { NgModule } from '@angular/core';

import { DeleteButtonComponent } from './components/crud/delete-button/delete-button.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { EditButtonComponent } from './components/crud/edit-button/edit-button.component';

@NgModule({
    declarations: [
        DeleteButtonComponent,
        EditButtonComponent
    ],
    imports: [
        MatIconModule,
        MatButtonModule
    ],
    entryComponents: [

    ],
    providers: [

    ],
    exports: [
        DeleteButtonComponent,
        EditButtonComponent
    ]
})
export class SharedModule { }
