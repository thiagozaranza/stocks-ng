export function showRequest( id : number ) : MethodDecorator {
    return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
        this.service.show(id, (response) => {
            this.entity = response.data;
            this.onShowRequested(response);
        });
    };
}