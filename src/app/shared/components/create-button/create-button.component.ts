import { Component, Input } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { ButtonType } from 'src/app/shared/global';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent {

    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    constructor(protected dialog: MatDialog)
    {

    }

    show(): void
    {
        this.dialog.closeAll();
        this.service.create();
    }

}
