import { AlertComponent } from '../components/alert/alert.component';
import { GenericFormComponent } from './generic-form.component';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../services/base.service';

export class GenericEditComponent implements OnInit
{
    protected service: BaseService;
    protected dialog: MatDialog;
    protected route: ActivatedRoute;
    
    protected id: number;
    protected element: any;

    public form: GenericFormComponent;

    ngOnInit(): void 
    {
        this.form.saveButtonListener$.subscribe((response) => {
            this.service.show(response.data.id);
        });

        this.form.cancelButtonListener$.subscribe(() => {
            this.service.index();
        });

        this.id = Number(this.route.snapshot.paramMap.get("id"));

        this.pick(this.id);
    } 

    pick(id:number) 
    {
        this.form.loading = true;

        this.service.pick(id, (response) => {
            this.form.loading = false;

            this.element = response.data;
        }, (error) => {
            this.form.loading = false;

            this.dialog.open(AlertComponent, {
                width: '400px',
                data: error
            });
        });
    }
}