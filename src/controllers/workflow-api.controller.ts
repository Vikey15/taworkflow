import {inject} from '@loopback/core';
import {post, requestBody} from '@loopback/rest';
import {WorkflowService} from '../services/workflow-service.service';

export class WorkflowApiController {
  constructor(
    @inject('services.WorkflowService')
    private workflowService: WorkflowService,
  ) {}

  // Test endpoint
  // @get('/getTest', {
  //   responses: {
  //     '200': {
  //       description: 'Workflow Test',
  //       content: {'application/json': {schema: {type: 'string'}}},
  //     },
  //   },
  // })
  // getTest(): string {
  //   return this.workflowService.getTest();
  // }

  // Initiate Workflow endpoint
  @post('/initiateWorkflow', {
    responses: {
      '200': {
        description: 'Initiate Workflow',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  initiateWorkflow(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.initiateWorkflow(req);
  }

  // Bulk Initiate Workflow endpoint
  @post('/initiateBulkWorkflow', {
    responses: {
      '200': {
        description: 'Bulk Initiate Workflow',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  initiateBulkWorkflow(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.initiateBulkWorkflow(req);
  }

  // Create Workflow endpoint
  @post('/createWorkflow', {
    responses: {
      '200': {
        description: 'Create Workflow',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  createWorkflow(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.createWorkflow(req);
  }

  // Update Workflow endpoint
  @post('/updateWorkflow', {
    responses: {
      '200': {
        description: 'Update Workflow',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  updateWorkflow(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.updateWorkflow(req);
  }

  // Claim Task endpoint
  @post('/claimTask', {
    responses: {
      '200': {
        description: 'Claim Task',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  claimTask(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.claimTask(req);
  }

  // Update Task endpoint
  @post('/updateTask', {
    responses: {
      '200': {
        description: 'Update Task',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  updateTask(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.updateTask(req);
  }

  // Get Event Parameters endpoint
  @post('/getEventParameters', {
    responses: {
      '200': {
        description: 'Get Event Parameters',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  getEventParameters(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.getEventParameters(req);
  }

  // Update Instance Data endpoint
  @post('/updateInstanceData', {
    responses: {
      '200': {
        description: 'Update Instance Data',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  updateInstanceData(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.updateInstanceData(req);
  }

  // Check Workflow Availability endpoint
  @post('/checkWorkflowAvailability', {
    responses: {
      '200': {
        description: 'Check Workflow Availability',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  checkWorkflowAvailability(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.checkWorkflowAvailability(req);
  }

  // Bulk User Task Update endpoint
  @post('/bulkUserTaskUpdate', {
    responses: {
      '200': {
        description: 'Bulk User Task Update',
        content: {'application/json': {schema: {type: 'object'}}},
      },
    },
  })
  bulkUserTaskUpdate(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    })
    req: object,
  ): object {
    return this.workflowService.bulkUserTaskUpdate(req);
  }
}
