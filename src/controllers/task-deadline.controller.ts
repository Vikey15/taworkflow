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
import {TaskDeadline} from '../models';
import {TaskDeadlineRepository} from '../repositories';

export class TaskDeadlineController {
  constructor(
    @repository(TaskDeadlineRepository)
    public taskDeadlineRepository : TaskDeadlineRepository,
  ) {}

  @post('/task-deadlines')
  @response(200, {
    description: 'TaskDeadline model instance',
    content: {'application/json': {schema: getModelSchemaRef(TaskDeadline)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskDeadline, {
            title: 'NewTaskDeadline',
            
          }),
        },
      },
    })
    taskDeadline: TaskDeadline,
  ): Promise<TaskDeadline> {
    return this.taskDeadlineRepository.create(taskDeadline);
  }

  @get('/task-deadlines/count')
  @response(200, {
    description: 'TaskDeadline model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TaskDeadline) where?: Where<TaskDeadline>,
  ): Promise<Count> {
    return this.taskDeadlineRepository.count(where);
  }

  @get('/task-deadlines')
  @response(200, {
    description: 'Array of TaskDeadline model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TaskDeadline, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TaskDeadline) filter?: Filter<TaskDeadline>,
  ): Promise<TaskDeadline[]> {
    return this.taskDeadlineRepository.find(filter);
  }

  @patch('/task-deadlines')
  @response(200, {
    description: 'TaskDeadline PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskDeadline, {partial: true}),
        },
      },
    })
    taskDeadline: TaskDeadline,
    @param.where(TaskDeadline) where?: Where<TaskDeadline>,
  ): Promise<Count> {
    return this.taskDeadlineRepository.updateAll(taskDeadline, where);
  }

  @get('/task-deadlines/{id}')
  @response(200, {
    description: 'TaskDeadline model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TaskDeadline, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TaskDeadline, {exclude: 'where'}) filter?: FilterExcludingWhere<TaskDeadline>
  ): Promise<TaskDeadline> {
    return this.taskDeadlineRepository.findById(id, filter);
  }

  @patch('/task-deadlines/{id}')
  @response(204, {
    description: 'TaskDeadline PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TaskDeadline, {partial: true}),
        },
      },
    })
    taskDeadline: TaskDeadline,
  ): Promise<void> {
    await this.taskDeadlineRepository.updateById(id, taskDeadline);
  }

  @put('/task-deadlines/{id}')
  @response(204, {
    description: 'TaskDeadline PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() taskDeadline: TaskDeadline,
  ): Promise<void> {
    await this.taskDeadlineRepository.replaceById(id, taskDeadline);
  }

  @del('/task-deadlines/{id}')
  @response(204, {
    description: 'TaskDeadline DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.taskDeadlineRepository.deleteById(id);
  }
}
