import { BaseService } from 'src/app/shared/base.service';

export class SubsetorService extends BaseService
{
    public resource = 'subsetor';
    public urn = 'rest/' + this.resource;
}
