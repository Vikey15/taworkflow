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
import {UserTaskHistory} from '../models';
import {UserTaskHistoryRepository} from '../repositories';

export class UserTaskHistoryController {
  constructor(
    @repository(UserTaskHistoryRepository)
    public userTaskHistoryRepository : UserTaskHistoryRepository,
  ) {}

  @post('/user-task-histories')
  @response(200, {
    description: 'UserTaskHistory model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserTaskHistory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTaskHistory, {
            title: 'NewUserTaskHistory',
            
          }),
        },
      },
    })
    userTaskHistory: UserTaskHistory,
  ): Promise<UserTaskHistory> {
    return this.userTaskHistoryRepository.create(userTaskHistory);
  }

  @get('/user-task-histories/count')
  @response(200, {
    description: 'UserTaskHistory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserTaskHistory) where?: Where<UserTaskHistory>,
  ): Promise<Count> {
    return this.userTaskHistoryRepository.count(where);
  }

  @get('/user-task-histories')
  @response(200, {
    description: 'Array of UserTaskHistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserTaskHistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserTaskHistory) filter?: Filter<UserTaskHistory>,
  ): Promise<UserTaskHistory[]> {
    return this.userTaskHistoryRepository.find(filter);
  }

  @patch('/user-task-histories')
  @response(200, {
    description: 'UserTaskHistory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTaskHistory, {partial: true}),
        },
      },
    })
    userTaskHistory: UserTaskHistory,
    @param.where(UserTaskHistory) where?: Where<UserTaskHistory>,
  ): Promise<Count> {
    return this.userTaskHistoryRepository.updateAll(userTaskHistory, where);
  }

  @get('/user-task-histories/{id}')
  @response(200, {
    description: 'UserTaskHistory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserTaskHistory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserTaskHistory, {exclude: 'where'}) filter?: FilterExcludingWhere<UserTaskHistory>
  ): Promise<UserTaskHistory> {
    return this.userTaskHistoryRepository.findById(id, filter);
  }

  @patch('/user-task-histories/{id}')
  @response(204, {
    description: 'UserTaskHistory PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTaskHistory, {partial: true}),
        },
      },
    })
    userTaskHistory: UserTaskHistory,
  ): Promise<void> {
    await this.userTaskHistoryRepository.updateById(id, userTaskHistory);
  }

  @put('/user-task-histories/{id}')
  @response(204, {
    description: 'UserTaskHistory PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userTaskHistory: UserTaskHistory,
  ): Promise<void> {
    await this.userTaskHistoryRepository.replaceById(id, userTaskHistory);
  }

  @del('/user-task-histories/{id}')
  @response(204, {
    description: 'UserTaskHistory DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userTaskHistoryRepository.deleteById(id);
  }
}
