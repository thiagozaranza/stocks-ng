import { Input, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { BaseService } from 'src/app/shared/base.service';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-delete-button',
    templateUrl: './delete-button.component.html',
})

export class DeleteButtonComponent {

    @Input() element;
    @Input() service: BaseService;

    private callDeleteButton = new Subject<any>();
    public  callDeleteButton$ = this.callDeleteButton.asObservable();

    private deleteConfirm = DeleteConfirmComponent;
    
    constructor(protected dialog: MatDialog) {
        
    }

    destroy(id: number): void
    {
        this.service.destroy(id, (response) => {
            this.callDeleteButton.next(response.data);
        }, (error) => {
            // TODO
        });
    }

    confirmDelete(id: number): void
    {
        const dialogRef = this.dialog.open(this.deleteConfirm, {
            width: '400px',
            data: {id: id}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                this.destroy(id);      
        });
    }
}
