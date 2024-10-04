import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {UserTaskHistory, UserTaskHistoryRelations} from '../models';

export class UserTaskHistoryRepository extends DefaultCrudRepository<
  UserTaskHistory,
  typeof UserTaskHistory.prototype.userTaskHistoryId,
  UserTaskHistoryRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(UserTaskHistory, dataSource);
  }
}
