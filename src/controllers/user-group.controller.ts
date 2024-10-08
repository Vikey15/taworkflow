import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {UserGroup} from '../models';
import {UserGroupRepository} from '../repositories';

export class UserGroupController {
  constructor(
    @repository(UserGroupRepository)
    public userGroupRepository: UserGroupRepository,
  ) {}

  @post('/user-groups')
  @response(200, {
    description: 'UserGroup model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserGroup)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserGroup, {
            title: 'NewUserGroup',
          }),
        },
      },
    })
    userGroup: UserGroup,
  ): Promise<UserGroup> {
    return this.userGroupRepository.create(userGroup);
  }

  @get('/user-groups/count')
  @response(200, {
    description: 'UserGroup model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserGroup) where?: Where<UserGroup>,
  ): Promise<Count> {
    return this.userGroupRepository.count(where);
  }

  @get('/user-groups')
  @response(200, {
    description: 'Array of UserGroup model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserGroup, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserGroup) filter?: Filter<UserGroup>,
  ): Promise<UserGroup[]> {
    return this.userGroupRepository.find(filter);
  }

  @patch('/user-groups')
  @response(200, {
    description: 'UserGroup PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserGroup, {partial: true}),
        },
      },
    })
    userGroup: UserGroup,
    @param.where(UserGroup) where?: Where<UserGroup>,
  ): Promise<Count> {
    return this.userGroupRepository.updateAll(userGroup, where);
  }

  @get('/user-groups/{id}')
  @response(200, {
    description: 'UserGroup model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserGroup, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserGroup, {exclude: 'where'})
    filter?: FilterExcludingWhere<UserGroup>,
  ): Promise<UserGroup> {
    return this.userGroupRepository.findById(id, filter);
  }

  @patch('/user-groups/{id}')
  @response(204, {
    description: 'UserGroup PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserGroup, {partial: true}),
        },
      },
    })
    userGroup: UserGroup,
  ): Promise<void> {
    await this.userGroupRepository.updateById(id, userGroup);
  }

  @put('/user-groups/{id}')
  @response(204, {
    description: 'UserGroup PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userGroup: UserGroup,
  ): Promise<void> {
    await this.userGroupRepository.replaceById(id, userGroup);
  }

  @del('/user-groups/{id}')
  @response(204, {
    description: 'UserGroup DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userGroupRepository.deleteById(id);
  }
}
