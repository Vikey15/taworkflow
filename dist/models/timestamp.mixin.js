"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeStampMixin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
// Define the TimeStampMixin function
function TimeStampMixin(BaseClass) {
    // Create a new class that extends the base class
    let TimeStampEntity = class TimeStampEntity extends BaseClass {
        constructor(...args) {
            super(...args); // Call the constructor of the base class
        }
    };
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            required: false,
            postgresql: {
                columnName: 'created_date',
                dataType: 'timestamp with time zone',
            },
        }),
        tslib_1.__metadata("design:type", Date)
    ], TimeStampEntity.prototype, "createdDate", void 0);
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            required: false,
            postgresql: {
                columnName: 'updated_date',
                dataType: 'timestamp with time zone',
            },
        }),
        tslib_1.__metadata("design:type", Date)
    ], TimeStampEntity.prototype, "updatedDate", void 0);
    TimeStampEntity = tslib_1.__decorate([
        (0, repository_1.model)() // Decorate the class to apply model metadata
        ,
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TimeStampEntity);
    return TimeStampEntity;
}
exports.TimeStampMixin = TimeStampMixin;
//# sourceMappingURL=timestamp.mixin.js.map