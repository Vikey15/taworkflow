import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UserTask } from '../models';
import { UserTaskRepository } from '../repositories';
export declare class UserTaskController {
    userTaskRepository: UserTaskRepository;
    constructor(userTaskRepository: UserTaskRepository);
    create(userTask: UserTask): Promise<UserTask>;
    count(where?: Where<UserTask>): Promise<Count>;
    find(filter?: Filter<UserTask>): Promise<UserTask[]>;
    updateAll(userTask: UserTask, where?: Where<UserTask>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<UserTask>): Promise<UserTask>;
    updateById(id: string, userTask: UserTask): Promise<void>;
    replaceById(id: string, userTask: UserTask): Promise<void>;
    deleteById(id: string): Promise<void>;
}
