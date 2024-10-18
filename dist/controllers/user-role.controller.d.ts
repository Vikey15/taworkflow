import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UserRole } from '../models';
import { UserRoleRepository } from '../repositories';
export declare class UserRoleController {
    userRoleRepository: UserRoleRepository;
    constructor(userRoleRepository: UserRoleRepository);
    create(userRole: UserRole): Promise<UserRole>;
    count(where?: Where<UserRole>): Promise<Count>;
    find(filter?: Filter<UserRole>): Promise<UserRole[]>;
    updateAll(userRole: UserRole, where?: Where<UserRole>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<UserRole>): Promise<UserRole>;
    updateById(id: string, userRole: UserRole): Promise<void>;
    replaceById(id: string, userRole: UserRole): Promise<void>;
    deleteById(id: string): Promise<void>;
}
