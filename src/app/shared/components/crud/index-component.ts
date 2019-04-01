import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Restfy } from '../../restfy.decorator';

@Restfy()

export class IndexComponent implements OnInit
{    
    protected service;
    protected router: Router;
    protected dialog;

    protected deleteConfirmComponent;

    constructor() { 
        
    }

    ngOnInit() 
    {
        
    }

    destroy(id: number): void
    {
        this.service.destroy(id, (response) => {
            //this.dataSource.data = response.data;
        });
    }

    confirmDelete(id: number): void
    {
        const dialogRef = this.dialog.open(this.deleteConfirmComponent, {
            width: '400px',
            data: {id: id}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                this.destroy(id);      
        });
    }

    
}