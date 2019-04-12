import { BaseService } from 'src/app/shared/base.service';

export class SegmentoService extends BaseService
{
    public resource = 'segmento';
    public urn = 'rest/' + this.resource;
}
