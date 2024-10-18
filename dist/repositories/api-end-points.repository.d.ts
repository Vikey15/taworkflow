import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { ApiEndPoints, ApiEndPointsRelations } from '../models';
export declare class ApiEndPointsRepository extends DefaultCrudRepository<ApiEndPoints, typeof ApiEndPoints.prototype.endpointId, ApiEndPointsRelations> {
    constructor(dataSource: juggler.DataSource);
}
