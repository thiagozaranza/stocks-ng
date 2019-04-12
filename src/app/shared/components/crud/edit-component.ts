import { Restfy } from '../../restfy.decorator';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent } from 'src/app/modules/layout/alert/alert.component';

@Restfy()

export class EditComponent implements OnInit
{ 
    protected resourceName;
    protected service;
    protected dialog;

    ngOnInit() 
    {
        
    }

    onSaveError(error: HttpErrorResponse): void
    {
        const dialogRef = this.dialog.open(AlertComponent, {
            width: '400px',
            data: error
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                console.log('OK');
        });
    }

    onSaveSuccess(response): void
    {
        this['show'](response.data.id);
    }
}