export function RestServices(): ClassDecorator 
{
    return function ( constructor : any ) 
    {
        constructor.prototype.destroy = function(id: number): void
        {
            this.service.addFilter('id', id);
            this.service.destroy((response) => {
                this.dataSource.data = response.data;
            });
        }

        constructor.prototype.list = function(): void 
        {
            this.service.index((response) => {
                this.dataSource.data = response.data.list;
                this.total_pages = response.data.total_results;
                this.page_size = response.meta.request.query_params.paginator.limit;
            });
        }
    }
}