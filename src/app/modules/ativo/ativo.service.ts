import { BaseService } from 'src/app/shared/base.service';

export class AtivoService extends BaseService
{
    public resource = 'ativo';
    public urn = 'rest/' + this.resource;
}
