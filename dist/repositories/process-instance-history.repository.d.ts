import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { ProcessInstanceHistory, ProcessInstanceHistoryRelations } from '../models';
export declare class ProcessInstanceHistoryRepository extends DefaultCrudRepository<ProcessInstanceHistory, typeof ProcessInstanceHistory.prototype.processInstanceId, ProcessInstanceHistoryRelations> {
    constructor(dataSource: juggler.DataSource);
}
