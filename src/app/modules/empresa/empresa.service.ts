import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
    providedIn: 'root'
})

export class EmpresaService extends BaseService
{
    urn = 'rest/empresa';
}
