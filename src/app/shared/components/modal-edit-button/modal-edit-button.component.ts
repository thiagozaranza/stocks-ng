import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { ButtonType } from '../../global';
import { MatDialog } from '@angular/material';
import { ModalActionComponent } from '../modal-action/modal-action.component';
import { SetorCardComponent } from 'src/app/modules/setor/setor-components/setor-card/setor-card.component';

@Component({
  selector: 'app-modal-edit-button',
  templateUrl: './modal-edit-button.component.html',
  styleUrls: ['./modal-edit-button.component.scss']
})

export class ModalEditButtonComponent implements OnInit 
{

    @Input() element;
    @Input() service: BaseService;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    constructor(protected dialog: MatDialog) 
    { 

    }

    ngOnInit() {
    }

    edit()
    {
        this.dialog.open(ModalActionComponent, {
            width: '800px',
            data: {
                title: 'test',
                content: "<app-setor-card-component></app-setor-card-component>",
                actions: 'actions'
            }
        });
    }

}
