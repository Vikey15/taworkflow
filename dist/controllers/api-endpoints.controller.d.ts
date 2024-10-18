import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ApiEndPoints } from '../models';
import { ApiEndPointsRepository } from '../repositories';
export declare class ApiEndpointsController {
    apiEndPointsRepository: ApiEndPointsRepository;
    constructor(apiEndPointsRepository: ApiEndPointsRepository);
    create(apiEndPoints: ApiEndPoints): Promise<ApiEndPoints>;
    count(where?: Where<ApiEndPoints>): Promise<Count>;
    find(filter?: Filter<ApiEndPoints>): Promise<ApiEndPoints[]>;
    updateAll(apiEndPoints: ApiEndPoints, where?: Where<ApiEndPoints>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ApiEndPoints>): Promise<ApiEndPoints>;
    updateById(id: string, apiEndPoints: ApiEndPoints): Promise<void>;
    replaceById(id: string, apiEndPoints: ApiEndPoints): Promise<void>;
    deleteById(id: string): Promise<void>;
}
