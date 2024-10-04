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
import {ProcessInstance} from '../models';
import {ProcessInstanceRepository} from '../repositories';

export class ProcessInstanceController {
  constructor(
    @repository(ProcessInstanceRepository)
    public processInstanceRepository : ProcessInstanceRepository,
  ) {}

  @post('/process-instances')
  @response(200, {
    description: 'ProcessInstance model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProcessInstance)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstance, {
            title: 'NewProcessInstance',
            
          }),
        },
      },
    })
    processInstance: ProcessInstance,
  ): Promise<ProcessInstance> {
    return this.processInstanceRepository.create(processInstance);
  }

  @get('/process-instances/count')
  @response(200, {
    description: 'ProcessInstance model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProcessInstance) where?: Where<ProcessInstance>,
  ): Promise<Count> {
    return this.processInstanceRepository.count(where);
  }

  @get('/process-instances')
  @response(200, {
    description: 'Array of ProcessInstance model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProcessInstance, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProcessInstance) filter?: Filter<ProcessInstance>,
  ): Promise<ProcessInstance[]> {
    return this.processInstanceRepository.find(filter);
  }

  @patch('/process-instances')
  @response(200, {
    description: 'ProcessInstance PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstance, {partial: true}),
        },
      },
    })
    processInstance: ProcessInstance,
    @param.where(ProcessInstance) where?: Where<ProcessInstance>,
  ): Promise<Count> {
    return this.processInstanceRepository.updateAll(processInstance, where);
  }

  @get('/process-instances/{id}')
  @response(200, {
    description: 'ProcessInstance model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProcessInstance, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProcessInstance, {exclude: 'where'}) filter?: FilterExcludingWhere<ProcessInstance>
  ): Promise<ProcessInstance> {
    return this.processInstanceRepository.findById(id, filter);
  }

  @patch('/process-instances/{id}')
  @response(204, {
    description: 'ProcessInstance PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstance, {partial: true}),
        },
      },
    })
    processInstance: ProcessInstance,
  ): Promise<void> {
    await this.processInstanceRepository.updateById(id, processInstance);
  }

  @put('/process-instances/{id}')
  @response(204, {
    description: 'ProcessInstance PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() processInstance: ProcessInstance,
  ): Promise<void> {
    await this.processInstanceRepository.replaceById(id, processInstance);
  }

  @del('/process-instances/{id}')
  @response(204, {
    description: 'ProcessInstance DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.processInstanceRepository.deleteById(id);
  }
}
