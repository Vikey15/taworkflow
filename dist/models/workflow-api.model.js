"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowApi = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let WorkflowApi = class WorkflowApi extends repository_1.Entity {
    // Add more properties as needed
    constructor(data) {
        super(data);
    }
};
exports.WorkflowApi = WorkflowApi;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true, // Automatically generated (e.g., auto-increment)
    }),
    tslib_1.__metadata("design:type", Number)
], WorkflowApi.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WorkflowApi.prototype, "name", void 0);
exports.WorkflowApi = WorkflowApi = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WorkflowApi);
//# sourceMappingURL=workflow-api.model.js.map