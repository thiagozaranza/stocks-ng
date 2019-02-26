import { HttpClient } from '@angular/common/http';
import { GlobalApp } from '../shared/global';
import { MetaRequest } from '../shared/meta-request';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { isNull } from 'util';

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

  constructor(protected http: HttpClient, protected globalApp: GlobalApp) { 
    console.log('BaseService' + this.urn);
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
    //this.meta_request[]['key] = value;
    return this;
  }

  makeQuery()
  {
    var query:string = '?';

    if (this._page)
      query += '&page=' + this._page;

    if (this._limit)
      query += '&limit=' + this._limit;

    return query;
  }

  public index(callback)
  {
    this.http.get(this.globalApp.base_url + this.urn + this.makeQuery()).subscribe(callback);
  }

}
