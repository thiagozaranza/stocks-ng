import { HttpClient } from '@angular/common/http';
import { GlobalApp } from '../shared/global';
import { MetaRequest } from '../shared/meta-request';
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
  public meta_request = [];

  constructor(protected http: HttpClient, protected globalApp: GlobalApp) { 
    console.log('BaseService' + this.urn);
  }

  limit(valor: number)
  {
    //this.meta_request['limit'] = valor;
    return this;
  }

  public page(valor: number)
  {
    //this.meta_request['page'] = valor;
    return this;
  }

  addFilter(key: string, value: any) 
  {
    //this.meta_request[]['key] = value;
    return this;
  }

  makeQuery()
  {
    return '';
  }

  public index(callback)
  {
    this.http.get(this.globalApp.base_url + this.urn + '?' + this.makeQuery()).subscribe(callback);
  }

}
