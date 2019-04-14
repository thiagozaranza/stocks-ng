import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { ButtonType } from 'src/app/shared/global';

@Component({
    selector: 'app-show-button',
    templateUrl: './show-button.component.html',
    styleUrls: ['./show-button.component.scss']
})
export class ShowButtonComponent {

    @Input() element;
    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    show(): void
    {
        this.service.show(this.element.id);
    }
}
