import { Component, Input } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { ButtonType } from 'src/app/shared/global';

@Component({
  selector: 'app-index-button',
  templateUrl: './index-button.component.html',
  styleUrls: ['./index-button.component.scss']
})
export class IndexButtonComponent
{
    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;
    
    index() {
        this.service.index();
    }
}
