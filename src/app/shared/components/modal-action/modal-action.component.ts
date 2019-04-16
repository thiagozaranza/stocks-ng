import { Component, OnInit, Inject, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalHolderDirective } from '../../directives/modal-holder.directive';
import { ModalHolderInterface } from '../../interfaces/modal-holder.interface';

@Component({
    selector: 'app-modal-action',
    templateUrl: './modal-action.component.html',
    styleUrls: ['./modal-action.component.scss']
})
export class ModalActionComponent implements OnInit 
{
    @ViewChild(ModalHolderDirective) modalHolder: ModalHolderDirective;

    @Input() content: any;

    constructor(
        public dialogRef: MatDialogRef<ModalActionComponent>, 
        @Inject(MAT_DIALOG_DATA) public data,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) { 
        
    }

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() 
    {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.content);

        let viewContainerRef = this.modalHolder.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<ModalHolderInterface>componentRef.instance).element = this.data.element;
    }
}