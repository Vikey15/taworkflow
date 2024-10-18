"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const java = require('java');
let WorkflowService = class WorkflowService {
    constructor() {
        // Push necessary JAR files to the classpath
        java.classpath.push('D:/TA/taworkflow/src/lib/ta-workflow-1.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/json-20180130.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/c3p0-0.9.5.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/velocity-1.7.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/postgresql-42.5.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/camunda-bpmn-model-7.9.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/camunda-xml-model-7.9.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/org.everit.json.schema-1.3.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/httpclient-4.5.10.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/smtp-1.4.5.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/javax.mail-1.6.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/activation-1.1.1.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/httpcore-4.4.12.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/commons-logging-1.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/json-path-2.4.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/json-smart-2.2.1.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/asm-1.0.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/commons-lang-2.4.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/commons-collections-3.2.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/log4j-1.2.17.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/slf4j-log4j12-1.7.13.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/slf4j-api-1.7.13.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/kafka-clients-1.1.0.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/aws-java-sdk-core-1.12.437.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/aws-java-sdk-ecr-1.12.437.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/aws-java-sdk-kms-1.12.437.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/jackson-annotations-2.12.7.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/jackson-core-2.14.2.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/jackson-databind-2.12.7.1.jar');
        java.classpath.push('D:/TA/taworkflow/src/lib/joda-time-2.12.5.jar');
        // Import the Workflow Java class
        this.worflow = java.import('com.afforde.workflow.Workflow');
    }
    testMethod() {
        try {
            return this.worflow.testSync(); // Use the previously imported workflow instance
        }
        catch (error) {
            console.error('Error in testMethod:', error.stack || error);
            throw error; // Re-throw or handle as needed
        }
    }
    // Method to initiate the workflow
    initiateWorkflow(req) {
        try {
            const response = this.worflow.initiateWorkflowSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error initiating workflow: ' + error.message);
        }
    }
    // Method to handle bulk workflow initiation
    initiateBulkWorkflow(req) {
        try {
            req.payload.forEach((data) => {
                this.worflow.initiateWorkflowSync(JSON.stringify(data));
            });
            return { status: 'success' };
        }
        catch (error) {
            throw new Error('Error initiating bulk workflow: ' + error.message);
        }
    }
    // Method to create a workflow
    createWorkflow(req) {
        try {
            const response = this.worflow.createWorkflowSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error creating workflow: ' + error.message);
        }
    }
    // Method to update a workflow
    updateWorkflow(req) {
        try {
            const response = this.worflow.updateWorkflowSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error updating workflow: ' + error.message);
        }
    }
    // Method to claim a task
    claimTask(req) {
        try {
            const response = this.worflow.claimTaskSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error claiming task: ' + error.message);
        }
    }
    // Method to update a task
    updateTask(req) {
        try {
            const response = this.worflow.updateTaskSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error updating task: ' + error.message);
        }
    }
    // Method to get event parameters
    getEventParameters(req) {
        try {
            const response = this.worflow.getEventParametersSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error getting event parameters: ' + error.message);
        }
    }
    // Method to update instance data
    updateInstanceData(req) {
        try {
            const response = this.worflow.updateInstanceDataSync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error updating instance data: ' + error.message);
        }
    }
    // Method to check workflow availability
    checkWorkflowAvailability(req) {
        try {
            const response = this.worflow.checkWorkflowAvailabilitySync(JSON.stringify(req));
            return JSON.parse(response);
        }
        catch (error) {
            throw new Error('Error checking workflow availability: ' + error.message);
        }
    }
    // Bulk update user tasks by business key
    bulkUserTaskUpdate(req) {
        try {
            req.payload.forEach((data) => {
                this.worflow.updateUserTaskByBusinessKeySync(JSON.stringify(data));
            });
            return { status: 'success' };
        }
        catch (error) {
            throw new Error('Error bulk updating user tasks: ' + error.message);
        }
    }
};
exports.WorkflowService = WorkflowService;
exports.WorkflowService = WorkflowService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__metadata("design:paramtypes", [])
], WorkflowService);
//# sourceMappingURL=workflow-service.service.js.map