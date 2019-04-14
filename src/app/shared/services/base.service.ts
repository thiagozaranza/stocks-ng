import { HttpClient } from '@angular/common/http';
import { GlobalApp } from '../global';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { isArray, isString } from 'util';
import { Router } from '@angular/router';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})

export class BaseService 
{
    protected urn = '';
    protected resource = '';

    private callComponent = new Subject<any>();
    public callComponent$ = this.callComponent.asObservable();
    public _limit;
    public _page: number;
    public _filters: object = {};
    public _with;
    public _orderBy: string;

    constructor(private router: Router, protected http: HttpClient, protected globalApp: GlobalApp) { 
        
    }

    alert(dialog, error) {
        dialog.open(AlertComponent, {
            width: '400px',
            data: error
        });
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

    noLimit(): BaseService
    {
        this._limit = 'no';
        return this;
    }

    with(valor): BaseService
    {
        this._with = valor;
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

    setFilters(filters: object) : BaseService
    {
        this._filters = filters;
        return this;
    }

    removeFilter(key: string) : BaseService
    {
        this._filters[key] = null;
        return this;
    }

    orderBy(criteria: string) : BaseService
    {
        this._orderBy = criteria;
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

            if (this._filters[key] == null || this._filters[key].length == 0)
                continue;

            if (key == 'id')
                query += '&id=' + this._filters[key];  
            else if (isNaN(Number(this._filters[key]))) {
                if (key.endsWith('-eq'))
                    query += '&' + key + '=' + this._filters[key];
                else
                    query += '&' + key + '-lk=' + this._filters[key];
            }    
            else
                query += '&' + key + '-eq=' + this._filters[key];  
        }

        if (isArray(this._with)) {
            query += '&with=' + this._with.join(',');
        } else if (isString(this._with)) {
            query += '&with=' + this._with;
        }

        if (this._orderBy)
            query += '&orderBy=' + this._orderBy;

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
        this.http.delete(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback, errorHandler);
    }

    public store(body, callback, errorHandler): void
    {
        this.http.post(this.globalApp.base_url + this.urn, body).subscribe(callback, errorHandler);    
    }

    public save(id, body, callback, errorHandler): void
    {
        if (id)
            this.http.put(this.globalApp.base_url + this.urn + '/' + id, body).subscribe(callback, errorHandler);    
        else 
            this.store(body, callback, errorHandler)
    }

    public index(): void
    {
        this.router.navigate(['/' + this.resource]);       
    }

    public create(): void
    {
        this.router.navigate(['/' + this.resource + '/create']);       
    }

    public edit(id: number): void
    {
        this.router.navigate(['/' + this.resource + '/' + id + '/edit']);       
    }

    public show(id: number): void
    {
        this.router.navigate(['/' + this.resource + '/' + id]);       
    }
}
