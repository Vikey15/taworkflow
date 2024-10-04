import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ApiEndPoints} from '../models';
import {ApiEndPointsRepository} from '../repositories';

export class ApiEndpointsController {
  constructor(
    @repository(ApiEndPointsRepository)
    public apiEndPointsRepository : ApiEndPointsRepository,
  ) {}

  @post('/api-end-points')
  @response(200, {
    description: 'ApiEndPoints model instance',
    content: {'application/json': {schema: getModelSchemaRef(ApiEndPoints)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApiEndPoints, {
            title: 'NewApiEndPoints',
            
          }),
        },
      },
    })
    apiEndPoints: ApiEndPoints,
  ): Promise<ApiEndPoints> {
    return this.apiEndPointsRepository.create(apiEndPoints);
  }

  @get('/api-end-points/count')
  @response(200, {
    description: 'ApiEndPoints model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ApiEndPoints) where?: Where<ApiEndPoints>,
  ): Promise<Count> {
    return this.apiEndPointsRepository.count(where);
  }

  @get('/api-end-points')
  @response(200, {
    description: 'Array of ApiEndPoints model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ApiEndPoints, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ApiEndPoints) filter?: Filter<ApiEndPoints>,
  ): Promise<ApiEndPoints[]> {
    return this.apiEndPointsRepository.find(filter);
  }

  @patch('/api-end-points')
  @response(200, {
    description: 'ApiEndPoints PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApiEndPoints, {partial: true}),
        },
      },
    })
    apiEndPoints: ApiEndPoints,
    @param.where(ApiEndPoints) where?: Where<ApiEndPoints>,
  ): Promise<Count> {
    return this.apiEndPointsRepository.updateAll(apiEndPoints, where);
  }

  @get('/api-end-points/{id}')
  @response(200, {
    description: 'ApiEndPoints model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ApiEndPoints, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ApiEndPoints, {exclude: 'where'}) filter?: FilterExcludingWhere<ApiEndPoints>
  ): Promise<ApiEndPoints> {
    return this.apiEndPointsRepository.findById(id, filter);
  }

  @patch('/api-end-points/{id}')
  @response(204, {
    description: 'ApiEndPoints PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApiEndPoints, {partial: true}),
        },
      },
    })
    apiEndPoints: ApiEndPoints,
  ): Promise<void> {
    await this.apiEndPointsRepository.updateById(id, apiEndPoints);
  }

  @put('/api-end-points/{id}')
  @response(204, {
    description: 'ApiEndPoints PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() apiEndPoints: ApiEndPoints,
  ): Promise<void> {
    await this.apiEndPointsRepository.replaceById(id, apiEndPoints);
  }

  @del('/api-end-points/{id}')
  @response(204, {
    description: 'ApiEndPoints DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.apiEndPointsRepository.deleteById(id);
  }
}
