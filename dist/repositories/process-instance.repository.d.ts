import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { ProcessInstance, ProcessInstanceRelations } from '../models';
export declare class ProcessInstanceRepository extends DefaultCrudRepository<ProcessInstance, typeof ProcessInstance.prototype.processInstanceId, ProcessInstanceRelations> {
    constructor(dataSource: juggler.DataSource);
}
