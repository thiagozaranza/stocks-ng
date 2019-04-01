import { BaseService } from 'src/app/shared/base.service';

export class SetorService extends BaseService
{
    public resource = 'setor';
    public urn = 'rest/' + this.resource;
}
