"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowTaskType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let WorkflowTaskType = class WorkflowTaskType extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.WorkflowTaskType = WorkflowTaskType;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        required: true,
        postgresql: {
            columnName: 'workflow_task_type_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], WorkflowTaskType.prototype, "workflowTaskTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'name',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], WorkflowTaskType.prototype, "name", void 0);
exports.WorkflowTaskType = WorkflowTaskType = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'workflow_task_type', // PostgreSQL table name
            },
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], WorkflowTaskType);
//# sourceMappingURL=workflow-task-type.model.js.map