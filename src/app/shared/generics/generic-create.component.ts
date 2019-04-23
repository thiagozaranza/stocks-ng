import { BaseService } from '../services/base.service';
import { GenericFormComponent } from './generic-form.component';

export class GenericCreateComponent
{ 
    protected resourceName;
    protected service: BaseService;
    protected dialog;

    public form: GenericFormComponent;

    ngOnInit(): void 
    {
        // this.form.saveButtonListener$.subscribe((response) => {
        //     this.service.show(response.data.id);
        // });

        this.form.cancelButtonListener$.subscribe(() => {
            this.service.index();
        });
    } 

    cancel()
    {
        this.service.index();
    }
}