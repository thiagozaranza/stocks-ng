import { Restfy } from '../../restfy.decorator';
import { OnInit } from '@angular/core';

@Restfy()

export class ShowComponent implements OnInit
{ 
    protected id: number;
    protected resourceName;
    protected service;

    ngOnInit() 
    {
        this['pick'](this.id);
    }
}