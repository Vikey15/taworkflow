import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Form } from '../models';
import { FormRepository } from '../repositories';
export declare class FormController {
    formRepository: FormRepository;
    constructor(formRepository: FormRepository);
    create(form: Omit<Form, 'formId'>): Promise<Form>;
    count(where?: Where<Form>): Promise<Count>;
    find(filter?: Filter<Form>): Promise<Form[]>;
    updateAll(form: Form, where?: Where<Form>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Form>): Promise<Form>;
    updateById(id: string, form: Form): Promise<void>;
    replaceById(id: string, form: Form): Promise<void>;
    deleteById(id: string): Promise<void>;
}
