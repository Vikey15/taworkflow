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
import {ProcessInstanceHistory} from '../models';
import {ProcessInstanceHistoryRepository} from '../repositories';

export class ProcessInstanceHistoryController {
  constructor(
    @repository(ProcessInstanceHistoryRepository)
    public processInstanceHistoryRepository : ProcessInstanceHistoryRepository,
  ) {}

  @post('/process-instance-histories')
  @response(200, {
    description: 'ProcessInstanceHistory model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProcessInstanceHistory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstanceHistory, {
            title: 'NewProcessInstanceHistory',
            
          }),
        },
      },
    })
    processInstanceHistory: ProcessInstanceHistory,
  ): Promise<ProcessInstanceHistory> {
    return this.processInstanceHistoryRepository.create(processInstanceHistory);
  }

  @get('/process-instance-histories/count')
  @response(200, {
    description: 'ProcessInstanceHistory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProcessInstanceHistory) where?: Where<ProcessInstanceHistory>,
  ): Promise<Count> {
    return this.processInstanceHistoryRepository.count(where);
  }

  @get('/process-instance-histories')
  @response(200, {
    description: 'Array of ProcessInstanceHistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProcessInstanceHistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProcessInstanceHistory) filter?: Filter<ProcessInstanceHistory>,
  ): Promise<ProcessInstanceHistory[]> {
    return this.processInstanceHistoryRepository.find(filter);
  }

  @patch('/process-instance-histories')
  @response(200, {
    description: 'ProcessInstanceHistory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstanceHistory, {partial: true}),
        },
      },
    })
    processInstanceHistory: ProcessInstanceHistory,
    @param.where(ProcessInstanceHistory) where?: Where<ProcessInstanceHistory>,
  ): Promise<Count> {
    return this.processInstanceHistoryRepository.updateAll(processInstanceHistory, where);
  }

  @get('/process-instance-histories/{id}')
  @response(200, {
    description: 'ProcessInstanceHistory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProcessInstanceHistory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProcessInstanceHistory, {exclude: 'where'}) filter?: FilterExcludingWhere<ProcessInstanceHistory>
  ): Promise<ProcessInstanceHistory> {
    return this.processInstanceHistoryRepository.findById(id, filter);
  }

  @patch('/process-instance-histories/{id}')
  @response(204, {
    description: 'ProcessInstanceHistory PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcessInstanceHistory, {partial: true}),
        },
      },
    })
    processInstanceHistory: ProcessInstanceHistory,
  ): Promise<void> {
    await this.processInstanceHistoryRepository.updateById(id, processInstanceHistory);
  }

  @put('/process-instance-histories/{id}')
  @response(204, {
    description: 'ProcessInstanceHistory PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() processInstanceHistory: ProcessInstanceHistory,
  ): Promise<void> {
    await this.processInstanceHistoryRepository.replaceById(id, processInstanceHistory);
  }

  @del('/process-instance-histories/{id}')
  @response(204, {
    description: 'ProcessInstanceHistory DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.processInstanceHistoryRepository.deleteById(id);
  }
}
