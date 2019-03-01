export function RestNavigation( resourceName : string ): ClassDecorator 
{
    return function ( constructor : any ) 
    {
        constructor.prototype.root = function () {
            this.router.navigate(['/' + resourceName]);       
        }

        constructor.prototype.create = function () {
            this.router.navigate(['/' + resourceName + '/create']);       
        }

        constructor.prototype.show = function () {
            this.router.navigate(['/' + resourceName + '/' + this.id]);       
        }

        constructor.prototype.edit = function () {
            this.router.navigate(['/' + resourceName + '/' + this.id + '/edit']);       
        }
    }
}