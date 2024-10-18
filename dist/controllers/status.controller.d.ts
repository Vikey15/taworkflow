import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Status } from '../models';
import { StatusRepository } from '../repositories';
export declare class StatusController {
    statusRepository: StatusRepository;
    constructor(statusRepository: StatusRepository);
    create(status: Status): Promise<Status>;
    count(where?: Where<Status>): Promise<Count>;
    find(filter?: Filter<Status>): Promise<Status[]>;
    updateAll(status: Status, where?: Where<Status>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Status>): Promise<Status>;
    updateById(id: string, status: Status): Promise<void>;
    replaceById(id: string, status: Status): Promise<void>;
    deleteById(id: string): Promise<void>;
}
