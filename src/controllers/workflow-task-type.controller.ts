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
import {WorkflowTaskType} from '../models';
import {WorkflowTaskTypeRepository} from '../repositories';

export class WorkflowTaskTypeController {
  constructor(
    @repository(WorkflowTaskTypeRepository)
    public workflowTaskTypeRepository : WorkflowTaskTypeRepository,
  ) {}

  @post('/workflow-task-types')
  @response(200, {
    description: 'WorkflowTaskType model instance',
    content: {'application/json': {schema: getModelSchemaRef(WorkflowTaskType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowTaskType, {
            title: 'NewWorkflowTaskType',
            
          }),
        },
      },
    })
    workflowTaskType: WorkflowTaskType,
  ): Promise<WorkflowTaskType> {
    return this.workflowTaskTypeRepository.create(workflowTaskType);
  }

  @get('/workflow-task-types/count')
  @response(200, {
    description: 'WorkflowTaskType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WorkflowTaskType) where?: Where<WorkflowTaskType>,
  ): Promise<Count> {
    return this.workflowTaskTypeRepository.count(where);
  }

  @get('/workflow-task-types')
  @response(200, {
    description: 'Array of WorkflowTaskType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WorkflowTaskType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WorkflowTaskType) filter?: Filter<WorkflowTaskType>,
  ): Promise<WorkflowTaskType[]> {
    return this.workflowTaskTypeRepository.find(filter);
  }

  @patch('/workflow-task-types')
  @response(200, {
    description: 'WorkflowTaskType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowTaskType, {partial: true}),
        },
      },
    })
    workflowTaskType: WorkflowTaskType,
    @param.where(WorkflowTaskType) where?: Where<WorkflowTaskType>,
  ): Promise<Count> {
    return this.workflowTaskTypeRepository.updateAll(workflowTaskType, where);
  }

  @get('/workflow-task-types/{id}')
  @response(200, {
    description: 'WorkflowTaskType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WorkflowTaskType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(WorkflowTaskType, {exclude: 'where'}) filter?: FilterExcludingWhere<WorkflowTaskType>
  ): Promise<WorkflowTaskType> {
    return this.workflowTaskTypeRepository.findById(id, filter);
  }

  @patch('/workflow-task-types/{id}')
  @response(204, {
    description: 'WorkflowTaskType PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowTaskType, {partial: true}),
        },
      },
    })
    workflowTaskType: WorkflowTaskType,
  ): Promise<void> {
    await this.workflowTaskTypeRepository.updateById(id, workflowTaskType);
  }

  @put('/workflow-task-types/{id}')
  @response(204, {
    description: 'WorkflowTaskType PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() workflowTaskType: WorkflowTaskType,
  ): Promise<void> {
    await this.workflowTaskTypeRepository.replaceById(id, workflowTaskType);
  }

  @del('/workflow-task-types/{id}')
  @response(204, {
    description: 'WorkflowTaskType DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.workflowTaskTypeRepository.deleteById(id);
  }
}
