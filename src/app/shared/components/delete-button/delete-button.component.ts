import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { BaseService } from 'src/app/shared/services/base.service';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import { ButtonType } from 'src/app/shared/global';

@Component({
    selector: 'app-delete-button',
    templateUrl: './delete-button.component.html',
})

export class DeleteButtonComponent implements OnInit{

    @Input() element;
    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    protected text;
    private callDeleteButton = new Subject<any>();
    public  callDeleteButton$ = this.callDeleteButton.asObservable();

    constructor(protected dialog: MatDialog) 
    {
        
    }

    ngOnInit(): void 
    {
        this.text = (this.showText)? ' Deletar' : '';
    }

    destroy(id: number): void
    {
        this.service.destroy(id, (response) => {
            this.callDeleteButton.next(response.data);
        }, (error) => {
            this.alert(error);
        });
    }

    alert(error): void
    {
        this.dialog.open(AlertComponent, {
            width: '400px',
            data: error
        });
    }

    confirmDelete(): void
    {
        const dialogRef = this.dialog.open(DeleteConfirmComponent, {
            width: '400px',
            data: this.element.id
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                this.destroy(this.element.id);      
        });
    }
}
