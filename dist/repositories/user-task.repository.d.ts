import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { UserTask, UserTaskRelations } from '../models';
export declare class UserTaskRepository extends DefaultCrudRepository<UserTask, typeof UserTask.prototype.taskId, UserTaskRelations> {
    constructor(dataSource: juggler.DataSource);
}
