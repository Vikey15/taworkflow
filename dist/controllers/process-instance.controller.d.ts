import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProcessInstance } from '../models';
import { ProcessInstanceRepository } from '../repositories';
export declare class ProcessInstanceController {
    processInstanceRepository: ProcessInstanceRepository;
    constructor(processInstanceRepository: ProcessInstanceRepository);
    create(processInstance: ProcessInstance): Promise<ProcessInstance>;
    count(where?: Where<ProcessInstance>): Promise<Count>;
    find(filter?: Filter<ProcessInstance>): Promise<ProcessInstance[]>;
    updateAll(processInstance: ProcessInstance, where?: Where<ProcessInstance>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ProcessInstance>): Promise<ProcessInstance>;
    updateById(id: string, processInstance: ProcessInstance): Promise<void>;
    replaceById(id: string, processInstance: ProcessInstance): Promise<void>;
    deleteById(id: string): Promise<void>;
}
