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
import {WorkflowVersion} from '../models';
import {WorkflowVersionRepository} from '../repositories';

export class WorkflowVersionController {
  constructor(
    @repository(WorkflowVersionRepository)
    public workflowVersionRepository : WorkflowVersionRepository,
  ) {}

  @post('/workflow-versions')
  @response(200, {
    description: 'WorkflowVersion model instance',
    content: {'application/json': {schema: getModelSchemaRef(WorkflowVersion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowVersion, {
            title: 'NewWorkflowVersion',
            
          }),
        },
      },
    })
    workflowVersion: WorkflowVersion,
  ): Promise<WorkflowVersion> {
    return this.workflowVersionRepository.create(workflowVersion);
  }

  @get('/workflow-versions/count')
  @response(200, {
    description: 'WorkflowVersion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WorkflowVersion) where?: Where<WorkflowVersion>,
  ): Promise<Count> {
    return this.workflowVersionRepository.count(where);
  }

  @get('/workflow-versions')
  @response(200, {
    description: 'Array of WorkflowVersion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WorkflowVersion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WorkflowVersion) filter?: Filter<WorkflowVersion>,
  ): Promise<WorkflowVersion[]> {
    return this.workflowVersionRepository.find(filter);
  }

  @patch('/workflow-versions')
  @response(200, {
    description: 'WorkflowVersion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowVersion, {partial: true}),
        },
      },
    })
    workflowVersion: WorkflowVersion,
    @param.where(WorkflowVersion) where?: Where<WorkflowVersion>,
  ): Promise<Count> {
    return this.workflowVersionRepository.updateAll(workflowVersion, where);
  }

  @get('/workflow-versions/{id}')
  @response(200, {
    description: 'WorkflowVersion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WorkflowVersion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(WorkflowVersion, {exclude: 'where'}) filter?: FilterExcludingWhere<WorkflowVersion>
  ): Promise<WorkflowVersion> {
    return this.workflowVersionRepository.findById(id, filter);
  }

  @patch('/workflow-versions/{id}')
  @response(204, {
    description: 'WorkflowVersion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkflowVersion, {partial: true}),
        },
      },
    })
    workflowVersion: WorkflowVersion,
  ): Promise<void> {
    await this.workflowVersionRepository.updateById(id, workflowVersion);
  }

  @put('/workflow-versions/{id}')
  @response(204, {
    description: 'WorkflowVersion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() workflowVersion: WorkflowVersion,
  ): Promise<void> {
    await this.workflowVersionRepository.replaceById(id, workflowVersion);
  }

  @del('/workflow-versions/{id}')
  @response(204, {
    description: 'WorkflowVersion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.workflowVersionRepository.deleteById(id);
  }
}
