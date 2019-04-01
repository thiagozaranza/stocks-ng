import { BaseService } from 'src/app/shared/base.service';

export class IndiceService extends BaseService
{
    public resource = 'indice';
    public urn = 'rest/' + this.resource;
}
