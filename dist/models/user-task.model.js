"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTask = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const process_instance_model_1 = require("./process-instance.model"); // Adjust the import path as necessary
const status_model_1 = require("./status.model"); // Adjust the import path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let UserTask = class UserTask extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.UserTask = UserTask;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'task_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "taskId", void 0);
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
], UserTask.prototype, "name", void 0);
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
], UserTask.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'reason',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "reason", void 0);
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
], UserTask.prototype, "businessKey", void 0);
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
], UserTask.prototype, "assignee", void 0);
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
], UserTask.prototype, "groups", void 0);
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
], UserTask.prototype, "formIdentifier", void 0);
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
], UserTask.prototype, "formData", void 0);
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
], UserTask.prototype, "internalTaskId", void 0);
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
], UserTask.prototype, "workflowTaskType", void 0);
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
], UserTask.prototype, "claimedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'claimed_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "claimedDate", void 0);
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
], UserTask.prototype, "completedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'completed_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "completedDate", void 0);
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
], UserTask.prototype, "createdBy", void 0);
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
], UserTask.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'due_date',
            dataType: 'timestamp without time zone',
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "dueDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'notification_data',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "notificationData", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        postgresql: {
            columnName: 'deadline_notify_bf',
        },
    }),
    tslib_1.__metadata("design:type", Number)
], UserTask.prototype, "deadlineNotifyBf", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'task_action',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "taskAction", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'deadline_data',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "deadlineData", void 0);
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
], UserTask.prototype, "taskSearch", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "status_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => process_instance_model_1.ProcessInstance, { name: 'processInstance' }),
    tslib_1.__metadata("design:type", String)
], UserTask.prototype, "process_instance_id", void 0);
exports.UserTask = UserTask = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'user_task', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserTask);
//# sourceMappingURL=user-task.model.js.map