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

    public list(callback, errorHandler): void
    {
        this.http.get(this.globalApp.base_url + this.urn + this.makeQuery()).subscribe(callback, errorHandler);
    }

    public pick(id: number, callback, errorHandler): void
    {
        this.http.get(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback, errorHandler);
    }

    public destroy(id: number, callback, errorHandler): void
    {
        this.http.delete(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback);
    }

    public store(body, callback, errorHandler): void
    {
        this.http.post(this.globalApp.base_url + this.urn, body).subscribe(callback, errorHandler);    
    }

    public save(id, body, callback, errorHandler): void
    {
        this.http.put(this.globalApp.base_url + this.urn + '/' + id, body).subscribe(callback, errorHandler);    
    }
}
