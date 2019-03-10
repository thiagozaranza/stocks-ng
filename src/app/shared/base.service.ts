import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalApp } from '../shared/global';
import { Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BaseService 
{
    urn = '';

    private callComponent = new Subject<any>();
    public callComponent$ = this.callComponent.asObservable();
    public _limit: number;
    public _page: number;
    public _filters: object = {};

    constructor(protected http: HttpClient, protected globalApp: GlobalApp) { 
        
    }

    clean(): void{
        this.cleanPagination();
        this.cleanFilters();
    }

    cleanPagination(): void
    {
        this._limit = null;
        this._page = null;
    }

    cleanFilters(): void
    {
        this._filters = {};
    }

    limit(valor: number): BaseService
    {
        this._limit = valor;
        return this;
    }

    page(valor: number): BaseService
    {
        this._page = valor;
        return this;
    }

    addFilter(key: string, value: any) : BaseService
    {
        this._filters[key] = value;
        return this;
    }

    makeQuery(): string
    {
        var query:string = '?';

        if (this._page)
        query += '&page=' + this._page;

        if (this._limit)
        query += '&limit=' + this._limit;

        for (const key in this._filters) {

        if (this._filters[key].length == 0)
            continue;

        if (isNaN(Number(this._filters[key])))
            query += '&' + key + '-lk=' + this._filters[key];
        else
            query += '&id=' + this._filters[key];        
        }

        return query;
    }

    makeBody(): any
    {
        return this._filters;
    }

    public list(callback): void
    {
        this.http.get(this.globalApp.base_url + this.urn + this.makeQuery()).subscribe(callback);
    }

    public pick(id: number, callback): void
    {
        this.http.get(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback);
    }

    public destroy(id: number, callback): void
    {
        this.http.delete(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback);
    }

    public store(body, callback, errorHandler): void
    {
        this.http.post(this.globalApp.base_url + this.urn, body).subscribe(callback, errorHandler);    
    }

    public update(callback): void
    {
        //this.http.put(this.globalApp.base_url + this.urn + this._filters['id']).subscribe(callback);    
    }

    // private handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', error.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.error(
    //         'Backend returned code ${error.status}, ' +
    //         'body was: ${error.error}');
    //     }
    //     // return an observable with a user-facing error message
    //     return throwError(
    //       'Something bad happened; please try again later.');
    //   };
}
