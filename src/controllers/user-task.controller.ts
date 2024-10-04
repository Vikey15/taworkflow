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
import {UserTask} from '../models';
import {UserTaskRepository} from '../repositories';

export class UserTaskController {
  constructor(
    @repository(UserTaskRepository)
    public userTaskRepository : UserTaskRepository,
  ) {}

  @post('/user-tasks')
  @response(200, {
    description: 'UserTask model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserTask)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTask, {
            title: 'NewUserTask',
            
          }),
        },
      },
    })
    userTask: UserTask,
  ): Promise<UserTask> {
    return this.userTaskRepository.create(userTask);
  }

  @get('/user-tasks/count')
  @response(200, {
    description: 'UserTask model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserTask) where?: Where<UserTask>,
  ): Promise<Count> {
    return this.userTaskRepository.count(where);
  }

  @get('/user-tasks')
  @response(200, {
    description: 'Array of UserTask model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserTask, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserTask) filter?: Filter<UserTask>,
  ): Promise<UserTask[]> {
    return this.userTaskRepository.find(filter);
  }

  @patch('/user-tasks')
  @response(200, {
    description: 'UserTask PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTask, {partial: true}),
        },
      },
    })
    userTask: UserTask,
    @param.where(UserTask) where?: Where<UserTask>,
  ): Promise<Count> {
    return this.userTaskRepository.updateAll(userTask, where);
  }

  @get('/user-tasks/{id}')
  @response(200, {
    description: 'UserTask model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserTask, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserTask, {exclude: 'where'}) filter?: FilterExcludingWhere<UserTask>
  ): Promise<UserTask> {
    return this.userTaskRepository.findById(id, filter);
  }

  @patch('/user-tasks/{id}')
  @response(204, {
    description: 'UserTask PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserTask, {partial: true}),
        },
      },
    })
    userTask: UserTask,
  ): Promise<void> {
    await this.userTaskRepository.updateById(id, userTask);
  }

  @put('/user-tasks/{id}')
  @response(204, {
    description: 'UserTask PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userTask: UserTask,
  ): Promise<void> {
    await this.userTaskRepository.replaceById(id, userTask);
  }

  @del('/user-tasks/{id}')
  @response(204, {
    description: 'UserTask DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userTaskRepository.deleteById(id);
  }
}
