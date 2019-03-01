import { Router } from '@angular/router';

export class RestfullComponent {

    protected id: number;
    protected service;
    protected resource_name;
    protected loaded_entity;

    constructor(protected router: Router) 
    {

    }
  
    protected root() {
        this.router.navigate(['/' + this.resource_name]);       
    }

    protected create() {
        this.router.navigate(['/' + this.resource_name + '/create']);       
    }

    protected show(id: number) {
        this.router.navigate(['/' + this.resource_name + '/' + id]);       
    }

    protected edit(id: number) {
        this.router.navigate(['/' + this.resource_name + '/' + id + '/edit']);       
    }

    protected listRequest(): void 
    {
        this.service.index((response) => {
            this.dataSource.data = response.data.list;
            this.total_pages = response.data.total_results;
            this.page_size = response.meta.request.query_params.paginator.limit;
        });
    }

    protected destroyRequest(id: number): void
    {
        this.service.addFilter('id', id);
        this.service.destroy((response) => {
            this.dataSource.data = response.data;
        });
    }
  }