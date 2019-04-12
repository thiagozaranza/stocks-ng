import { Component, Input } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

@Component({
    selector: 'app-edit-button',
    templateUrl: './edit-button.component.html',
    styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {

    @Input() element;
    @Input() service: BaseService;

    edit(): void
    {
        this.service.edit(this.element.id);
    }
}
