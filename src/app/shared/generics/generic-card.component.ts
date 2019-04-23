import { BaseService } from '../services/base.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../components/alert/alert.component';
import { Input, OnInit, HostBinding } from '@angular/core';

export class GenericCardComponent implements OnInit
{
    @Input() element: any;
    
    public loading: boolean = false;

    protected service: BaseService;
    protected dialog: MatDialog;
    protected route: ActivatedRoute;    
    protected id: number;

    ngOnInit() 
    {
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.pick(this.id);

        this.service.change.subscribe(element => {
            this.element = element;
            this.pick(element.id)
        });

        // this.service.eventPick.subscribe((element) => {
        //     this.pick(element.id);
        // });
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