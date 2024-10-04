import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {UserTask, UserTaskRelations} from '../models';

export class UserTaskRepository extends DefaultCrudRepository<
  UserTask,
  typeof UserTask.prototype.taskId,
  UserTaskRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(UserTask, dataSource);
  }
}
