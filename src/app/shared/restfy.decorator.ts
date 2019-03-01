export function Restfy( resourceName : string ): ClassDecorator 
{
    return function ( constructor : any ) 
    {
        constructor.prototype.root = function () {
            this.router.navigate(['/' + resourceName]);       
        }

        constructor.prototype.create = function () {
            this.router.navigate(['/' + resourceName + '/create']);       
        }

        constructor.prototype.show = function (id: number) {
            this.router.navigate(['/' + resourceName + '/' + id]);       
        }

        constructor.prototype.edit = function (id: number) {
            this.router.navigate(['/' + resourceName + '/' + id + '/edit']);       
        }

        constructor.prototype.listRequest = function(): void 
        {
            this.service.index((response) => {
                this.dataSource.data = response.data.list;
                this.total_pages = response.data.total_results;
                this.page_size = response.meta.request.query_params.paginator.limit;
            });
        }

        constructor.prototype.destroyRequest = function(id: number): void
        {
            this.service.addFilter('id', id);
            this.service.destroy((response) => {
                this.dataSource.data = response.data;
            });
        }
 
    }
}