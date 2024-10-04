import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ApiEndPoints, ApiEndPointsRelations} from '../models';
export class ApiEndPointsRepository extends DefaultCrudRepository<
  ApiEndPoints,
  typeof ApiEndPoints.prototype.endpointId,
  ApiEndPointsRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource, // Use juggler.DataSource type
  ) {
    super(ApiEndPoints, dataSource);
  }
}
