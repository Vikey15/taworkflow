import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WorkflowTaskType } from '../models';
import { WorkflowTaskTypeRepository } from '../repositories';
export declare class WorkflowTaskTypeController {
    workflowTaskTypeRepository: WorkflowTaskTypeRepository;
    constructor(workflowTaskTypeRepository: WorkflowTaskTypeRepository);
    create(workflowTaskType: WorkflowTaskType): Promise<WorkflowTaskType>;
    count(where?: Where<WorkflowTaskType>): Promise<Count>;
    find(filter?: Filter<WorkflowTaskType>): Promise<WorkflowTaskType[]>;
    updateAll(workflowTaskType: WorkflowTaskType, where?: Where<WorkflowTaskType>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<WorkflowTaskType>): Promise<WorkflowTaskType>;
    updateById(id: string, workflowTaskType: WorkflowTaskType): Promise<void>;
    replaceById(id: string, workflowTaskType: WorkflowTaskType): Promise<void>;
    deleteById(id: string): Promise<void>;
}
