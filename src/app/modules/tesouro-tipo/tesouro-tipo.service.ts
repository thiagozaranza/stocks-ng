import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class TesouroTipoService extends BaseService
{
    public resource = 'tesouro-tipo';
    public urn = 'rest/' + this.resource;
}
