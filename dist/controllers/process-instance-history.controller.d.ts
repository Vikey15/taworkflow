import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProcessInstanceHistory } from '../models';
import { ProcessInstanceHistoryRepository } from '../repositories';
export declare class ProcessInstanceHistoryController {
    processInstanceHistoryRepository: ProcessInstanceHistoryRepository;
    constructor(processInstanceHistoryRepository: ProcessInstanceHistoryRepository);
    create(processInstanceHistory: ProcessInstanceHistory): Promise<ProcessInstanceHistory>;
    count(where?: Where<ProcessInstanceHistory>): Promise<Count>;
    find(filter?: Filter<ProcessInstanceHistory>): Promise<ProcessInstanceHistory[]>;
    updateAll(processInstanceHistory: ProcessInstanceHistory, where?: Where<ProcessInstanceHistory>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ProcessInstanceHistory>): Promise<ProcessInstanceHistory>;
    updateById(id: string, processInstanceHistory: ProcessInstanceHistory): Promise<void>;
    replaceById(id: string, processInstanceHistory: ProcessInstanceHistory): Promise<void>;
    deleteById(id: string): Promise<void>;
}
