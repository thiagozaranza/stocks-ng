import { Component, OnInit, Input } from '@angular/core';
import { ButtonType } from '../../global';
import { MatDialog } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';
import { ModalActionComponent } from '../modal-action/modal-action.component';

@Component({
  selector: 'app-modal-edit-button',
  templateUrl: './modal-edit-button.component.html',
  styleUrls: ['./modal-edit-button.component.scss']
})

export class ModalEditButtonComponent implements OnInit 
{
    @Input() element: any;
    @Input() content: ComponentType<any>;
    @Input() type: ButtonType = ButtonType.Default;
    @Input() showText: boolean = false;

    constructor(protected dialog: MatDialog) 
    { 

    }

    ngOnInit() 
    {
        
    }

    edit()
    {
        let dialogRef = this.dialog.open(ModalActionComponent, {
            width: '800px',
            minWidth: '600px',
            data: {                
                content: this.content,
                element: this.element
            }
        });
    }
}
