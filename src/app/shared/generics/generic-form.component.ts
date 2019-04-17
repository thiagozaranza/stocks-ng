import { Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { BaseService } from '../services/base.service';

export class GenericFormComponent
{
    protected id:number;
    protected elementForm: FormGroup; 

    @Input() element: any;
    @Input() service: BaseService;

    public loading: boolean = false;
    protected dialog: MatDialog;

    private cancelButtonListener  = new Subject<any>();
    public  cancelButtonListener$ = this.cancelButtonListener.asObservable();

    onFormSubmit(form:NgForm)  
    {  
        this.loading = true;

        this.service.save(this.element.id, form, (response) => {
            this.loading = false;

            if (this.dialog.openDialogs.length > 0)
                this.dialog.openDialogs.pop().close();

            this.service.savedElementListener.next(response);
        }, (error) => {
            this.loading = false;
            this.service.alert(this.dialog, error);
        });  
    }

    cancel()
    {
        if (this.dialog.openDialogs.length > 0)
            this.dialog.openDialogs.pop().close();

        this.cancelButtonListener.next();
    }
}