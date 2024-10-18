import { Entity } from '@loopback/repository';
export declare function TimeStampMixin<Base extends new (...args: any[]) => Entity>(BaseClass: Base): {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & Base;
