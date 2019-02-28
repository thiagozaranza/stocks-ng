import { HttpClient } from '@angular/common/http';
import { GlobalApp } from '../shared/global';
import { Subject } from 'rxjs';
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

  public index(callback): void
  {
    this.http.get(this.globalApp.base_url + this.urn + this.makeQuery()).subscribe(callback);
  }

  public show(id: number, callback): void
  {
    this.http.get(this.globalApp.base_url + this.urn + '/' + id).subscribe(callback);
  }

  public destroy(callback): void
  {
    this.http.delete(this.globalApp.base_url + this.urn + this._filters['id']).subscribe(callback);
  }

  public store(callback): void
  {
    //this.http.post(this.globalApp.base_url + this.urn + this._filters['id']).subscribe(callback);    
  }

  public update(callback): void
  {
    //this.http.put(this.globalApp.base_url + this.urn + this._filters['id']).subscribe(callback);    
  }
}
