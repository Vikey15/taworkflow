"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDeadline = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
const user_task_model_1 = require("./user-task.model"); // Adjust the import path as necessary
let TaskDeadline = class TaskDeadline extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.TaskDeadline = TaskDeadline;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'task_deadline_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], TaskDeadline.prototype, "taskDeadlineId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'sequence',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], TaskDeadline.prototype, "sequence", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'action_json',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], TaskDeadline.prototype, "actionJson", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], TaskDeadline.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_task_model_1.UserTask, { name: 'userTask' }),
    tslib_1.__metadata("design:type", String)
], TaskDeadline.prototype, "task_id", void 0);
exports.TaskDeadline = TaskDeadline = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'task_deadline', // PostgreSQL table name
            },
            validateUpsert: true,
            strict: true,
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], TaskDeadline);
//# sourceMappingURL=task-deadline.model.js.map