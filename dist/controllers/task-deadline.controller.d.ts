import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { TaskDeadline } from '../models';
import { TaskDeadlineRepository } from '../repositories';
export declare class TaskDeadlineController {
    taskDeadlineRepository: TaskDeadlineRepository;
    constructor(taskDeadlineRepository: TaskDeadlineRepository);
    create(taskDeadline: TaskDeadline): Promise<TaskDeadline>;
    count(where?: Where<TaskDeadline>): Promise<Count>;
    find(filter?: Filter<TaskDeadline>): Promise<TaskDeadline[]>;
    updateAll(taskDeadline: TaskDeadline, where?: Where<TaskDeadline>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<TaskDeadline>): Promise<TaskDeadline>;
    updateById(id: string, taskDeadline: TaskDeadline): Promise<void>;
    replaceById(id: string, taskDeadline: TaskDeadline): Promise<void>;
    deleteById(id: string): Promise<void>;
}
