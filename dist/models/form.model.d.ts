import { Entity } from '@loopback/repository';
import { Status } from './status.model';
declare const Form_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class Form extends Form_base {
    formId?: string;
    name?: string;
    description?: string;
    schema?: string;
    formJson?: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Form>);
}
export interface FormRelations {
    status?: Status;
}
export type FormWithRelations = Form & FormRelations;
export {};
