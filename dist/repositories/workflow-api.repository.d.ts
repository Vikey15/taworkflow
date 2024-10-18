import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { WorkflowApi, WorkflowApiRelations } from '../models';
export declare class WorkflowApiRepository extends DefaultCrudRepository<WorkflowApi, typeof WorkflowApi.prototype.id, WorkflowApiRelations> {
    constructor(dataSource: juggler.DataSource);
}
