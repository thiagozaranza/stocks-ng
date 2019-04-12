import { Restfy } from '../../restfy.decorator';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent } from 'src/app/modules/layout/alert/alert.component';

@Restfy()

export class CreateComponent implements OnInit
{ 
    protected resourceName;
    protected service;
    protected dialog;

    ngOnInit() 
    {
        
    }

    onStoreError(error: HttpErrorResponse): void
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

    onStoreSuccess(response): void
    {
        this['show'](response.data.id);
    }
}