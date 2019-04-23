import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { ButtonType } from 'src/app/shared/global';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-edit-button',
    templateUrl: './edit-button.component.html',
    styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
    
    @Input() element;
    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    protected text: string;

    constructor(protected dialog: MatDialog)
    {

    }

    ngOnInit(): void {
        this.text = (this.showText)? ' Editar' : '';
    }
    
    edit(): void
    {
        this.service.edit(this.element);
    }
}
