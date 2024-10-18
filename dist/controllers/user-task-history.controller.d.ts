import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UserTaskHistory } from '../models';
import { UserTaskHistoryRepository } from '../repositories';
export declare class UserTaskHistoryController {
    userTaskHistoryRepository: UserTaskHistoryRepository;
    constructor(userTaskHistoryRepository: UserTaskHistoryRepository);
    create(userTaskHistory: UserTaskHistory): Promise<UserTaskHistory>;
    count(where?: Where<UserTaskHistory>): Promise<Count>;
    find(filter?: Filter<UserTaskHistory>): Promise<UserTaskHistory[]>;
    updateAll(userTaskHistory: UserTaskHistory, where?: Where<UserTaskHistory>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<UserTaskHistory>): Promise<UserTaskHistory>;
    updateById(id: string, userTaskHistory: UserTaskHistory): Promise<void>;
    replaceById(id: string, userTaskHistory: UserTaskHistory): Promise<void>;
    deleteById(id: string): Promise<void>;
}
