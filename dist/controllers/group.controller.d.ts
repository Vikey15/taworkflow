import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Group } from '../models';
import { GroupRepository } from '../repositories';
export declare class GroupController {
    groupRepository: GroupRepository;
    constructor(groupRepository: GroupRepository);
    create(group: Group): Promise<Group>;
    count(where?: Where<Group>): Promise<Count>;
    find(filter?: Filter<Group>): Promise<Group[]>;
    updateAll(group: Group, where?: Where<Group>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Group>): Promise<Group>;
    updateById(id: string, group: Group): Promise<void>;
    replaceById(id: string, group: Group): Promise<void>;
    deleteById(id: string): Promise<void>;
}
