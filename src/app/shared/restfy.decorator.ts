import { HttpErrorResponse } from '@angular/common/http';

export function Restfy(): ClassDecorator 
{
    return function ( constructor : any ) 
    {
        constructor.prototype.root = function () {
            this.router.navigate(['/' + this.resourceName]);       
        }

        constructor.prototype.list = function () {
            this.service.list((response) => {
                if ( typeof this['onListed'] === 'function')
                    this['onListed'](response);
            });      
        }

        constructor.prototype.create = function () {
            this.router.navigate(['/' + this.resourceName + '/create']);       
        }

        constructor.prototype.store = function (body) {
            this.service.store(body, (response) => {
                if ( typeof this['onStoreSuccess'] === 'function')
                    this['onStoreSuccess'](response);
            }, (error: HttpErrorResponse) => {
                if ( typeof this['onStoreError'] === 'function')
                    this['onStoreError'](error);
            });      
        }

        constructor.prototype.show = function (id: number) {
            this.router.navigate(['/' + this.resourceName + '/' + id]);       
        }

        constructor.prototype.pick = function (id: number) {
            this.service.pick(id, (response) => {
                if ( typeof this['onPicked'] === 'function')
                    this['onPicked'](response);
            });      
        }

        constructor.prototype.edit = function (id: number) {
            this.router.navigate(['/' + this.resourceName + '/' + id + '/edit']);       
        }

        constructor.prototype.save = function () {
            this.service.save((response) => {
                if ( typeof this['onSaved'] === 'function')
                    this['onSaved'](response);
            });      
        }
    }
}