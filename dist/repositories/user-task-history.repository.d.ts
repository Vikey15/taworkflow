import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { UserTaskHistory, UserTaskHistoryRelations } from '../models';
export declare class UserTaskHistoryRepository extends DefaultCrudRepository<UserTaskHistory, typeof UserTaskHistory.prototype.userTaskHistoryId, UserTaskHistoryRelations> {
    constructor(dataSource: juggler.DataSource);
}
