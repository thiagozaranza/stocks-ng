import { HttpClient } from '@angular/common/http';
import { GlobalApp } from '../shared/global';
import { MetaRequest } from '../shared/meta-request';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { isNull, isNumber } from 'util';

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

  limit(valor: number)
  {
    this._limit = valor;
    return this;
  }

  public page(valor: number)
  {
    this._page = valor;
    return this;
  }

  addFilter(key: string, value: any) 
  {
    this._filters[key] = value;
    return this;
  }

  makeQuery()
  {
    var query:string = '?';

    if (this._page)
      query += '&page=' + this._page;

    if (this._limit)
      query += '&limit=' + this._limit;

    for (const key in this._filters) {
      if (isNaN(Number(this._filters[key])))
        query += '&' + key + '-lk=' + this._filters[key];
      else
        query += '&id=' + this._filters[key];        
    }

    return query;
  }

  public index(callback)
  {
    this.http.get(this.globalApp.base_url + this.urn + this.makeQuery()).subscribe(callback);
  }

}
