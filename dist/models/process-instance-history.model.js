"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInstanceHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const status_model_1 = require("./status.model"); // Adjust the import path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let ProcessInstanceHistory = class ProcessInstanceHistory extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.ProcessInstanceHistory = ProcessInstanceHistory;
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
], ProcessInstanceHistory.prototype, "processInstanceId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'workflow_version_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstanceHistory.prototype, "workflowVersionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'event_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstanceHistory.prototype, "eventId", void 0);
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
], ProcessInstanceHistory.prototype, "instanceData", void 0);
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
], ProcessInstanceHistory.prototype, "executionData", void 0);
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
], ProcessInstanceHistory.prototype, "parentProcessInstanceId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'child_process_instances',
            dataType: 'text',
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProcessInstanceHistory.prototype, "childProcessInstances", void 0);
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
], ProcessInstanceHistory.prototype, "createdBy", void 0);
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
], ProcessInstanceHistory.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'completed_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", Date)
], ProcessInstanceHistory.prototype, "completedDate", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstanceHistory.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], ProcessInstanceHistory.prototype, "status_id", void 0);
exports.ProcessInstanceHistory = ProcessInstanceHistory = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'process_instance_history', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProcessInstanceHistory);
//# sourceMappingURL=process-instance-history.model.js.map