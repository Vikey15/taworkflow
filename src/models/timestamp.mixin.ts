import {Entity, model, property} from '@loopback/repository';

// Define the TimeStampMixin function
export function TimeStampMixin<Base extends new (...args: any[]) => Entity>(
  BaseClass: Base,
) {
  // Create a new class that extends the base class
  @model() // Decorate the class to apply model metadata
  class TimeStampEntity extends BaseClass {
    @property({
      type: 'date',
      required: false,
      postgresql: {
        columnName: 'created_date',
        dataType: 'timestamp with time zone',
      },
    })
    createdDate?: Date;

    @property({
      type: 'date',
      required: false,
      postgresql: {
        columnName: 'updated_date',
        dataType: 'timestamp with time zone',
      },
    })
    updatedDate?: Date;

    constructor(...args: any[]) {
      super(...args); // Call the constructor of the base class
    }
  }

  return TimeStampEntity;
}
