import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
    selector: 'app-module-navigation',
    templateUrl: './module-navigation.component.html',
    styleUrls: ['./module-navigation.component.scss']
})
export class ModuleNavigationComponent{

    @Input() service: BaseService;
    @Input() title: string;
    @Input() actions: [];

    constructor() { 
        
    }

}