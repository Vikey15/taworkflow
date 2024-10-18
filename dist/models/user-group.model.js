"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const group_model_1 = require("./group.model");
const user_model_1 = require("./user.model");
let UserGroup = class UserGroup extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.UserGroup = UserGroup;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "userGroupId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => group_model_1.Group, { name: 'group' }),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "group_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User, { name: 'user' }),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "user_id", void 0);
exports.UserGroup = UserGroup = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'user_group', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserGroup);
//# sourceMappingURL=user-group.model.js.map