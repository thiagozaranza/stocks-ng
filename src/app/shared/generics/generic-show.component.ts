import { OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../components/alert/alert.component';

export class GenericShowComponent implements OnInit
{ 
    protected service: BaseService;
    protected dialog: MatDialog;
    protected route: ActivatedRoute;
    
    protected id: number;
    protected element: any;

    public loading: boolean = false;

    ngOnInit() 
    {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.pick(this.id);
    }

    pick(id:number) 
    {
        this.loading = true;

        this.service.pick(id, (response) => {
            this.loading = false;
            this.element = response.data;
        }, (error) => {
            this.loading = false;
            this.dialog.open(AlertComponent, {
                width: '400px',
                data: error
            });
        });
    }
}