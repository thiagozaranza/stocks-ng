import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class TesouroCategoriaService extends BaseService
{
    public resource = 'tesouro-categoria';
    public urn = 'rest/' + this.resource;
}
