import { HttpErrorResponse } from '@angular/common/http';

export function Restfy(): ClassDecorator 
{
    return function ( constructor : any ) 
    {
        constructor.prototype.root = function () {
            this.router.navigate(['/' + this.service.resource]);       
        }

        constructor.prototype.list = function () {
            this.service.list((response) => {
                if ( typeof this['onListSuccess'] === 'function')
                    this['onListSuccess'](response);
            }, (error: HttpErrorResponse) => {
                if (error.status == 401)
                    this.router.navigate(['/logout']);

                if ( typeof this['onListError'] === 'function')
                    this['onListError'](error);
            });      
        }

        constructor.prototype.create = function () {
            this.router.navigate(['/' + this.service.resource + '/create']);       
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
            this.router.navigate(['/' + this.service.resource + '/' + id]);       
        }

        constructor.prototype.pick = function (id: number) {
            this.service.pick(id, (response) => {
                if ( typeof this['onPickSuccess'] === 'function')
                    this['onPickSuccess'](response);
            }, (error: HttpErrorResponse) => {
                if ( typeof this['onPickError'] === 'function')
                    this['onPickError'](error);
            });      
        }

        constructor.prototype.edit = function (id: number) {
            this.router.navigate(['/' + this.service.resource + '/' + id + '/edit']);       
        }

        constructor.prototype.save = function (id: number, body) {
            this.service.save(id, body, (response) => {
                if ( typeof this['onSaveSuccess'] === 'function')
                    this['onSaveSuccess'](response);
            }, (error: HttpErrorResponse) => {
                if ( typeof this['onSaveError'] === 'function')
                    this['onSaveError'](error);
            });      
        }
    }
}