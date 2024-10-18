"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const timestamp_mixin_1 = require("./timestamp.mixin");
let Group = class Group extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data); // Call the constructor of the base class
        // Initialize timestamps if not already set
        if (!(data === null || data === void 0 ? void 0 : data.createdDate)) {
            this.createdDate = new Date(); // Set createdDate to the current date
        }
        this.updatedDate = new Date(); // Set updatedDate to the current date
    }
};
exports.Group = Group;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], Group.prototype, "groupId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Group.prototype, "name", void 0);
exports.Group = Group = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Group);
//# sourceMappingURL=group.model.js.map