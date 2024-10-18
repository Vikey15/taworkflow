"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTaskHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const process_instance_model_1 = require("./process-instance.model"); // Adjust the import path as necessary
const status_model_1 = require("./status.model"); // Adjust the import path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let UserTaskHistory = class UserTaskHistory extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.UserTaskHistory = UserTaskHistory;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'user_task_history_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "userTaskHistoryId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'task_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "taskId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'name',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'description',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'reason',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "reason", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'business_key',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "businessKey", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'assignee',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "assignee", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'groups',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "groups", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'form_identifier',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "formIdentifier", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'form_data',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "formData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'internal_task_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "internalTaskId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'workflow_task_type',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "workflowTaskType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'claimed_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "claimedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'claimed_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "claimedDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'completed_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "completedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'completed_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "completedDate", void 0);
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
], UserTaskHistory.prototype, "createdBy", void 0);
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
], UserTaskHistory.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'due_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "dueDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'task_type',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "taskType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'deadline_data',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "deadlineData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'task_search',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "taskSearch", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "status_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => process_instance_model_1.ProcessInstance, { name: 'process_instance_id' }),
    tslib_1.__metadata("design:type", String)
], UserTaskHistory.prototype, "process_instance_id", void 0);
exports.UserTaskHistory = UserTaskHistory = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'user_task_history', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserTaskHistory);
//# sourceMappingURL=user-task-history.model.js.map