"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInstance = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const event_model_1 = require("./event.model"); // Adjust the import path as necessary
const status_model_1 = require("./status.model"); // Adjust the import path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
const workflow_version_model_1 = require("./workflow-version.model"); // Adjust the import path as necessary
let ProcessInstance = class ProcessInstance extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.ProcessInstance = ProcessInstance;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'process_instance_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "processInstanceId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'instance_data',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "instanceData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'execution_data',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "executionData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'parent_process_instance_id',
            dataType: 'character varying',
            dataLength: 100,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "parentProcessInstanceId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'child_process_instances',
            dataType: 'text',
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "childProcessInstances", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'created_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'updated_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "status_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => workflow_version_model_1.WorkflowVersion, { name: 'workflow_version' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "workflow_version_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => event_model_1.Event, { name: 'event' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstance.prototype, "event_id", void 0);
exports.ProcessInstance = ProcessInstance = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'process_instance', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProcessInstance);
//# sourceMappingURL=process-instance.model.js.map