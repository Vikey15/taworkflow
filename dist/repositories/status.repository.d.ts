import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Status, StatusRelations } from '../models';
export declare class StatusRepository extends DefaultCrudRepository<Status, typeof Status.prototype.statusId, StatusRelations> {
    constructor(dataSource: juggler.DataSource);
}
