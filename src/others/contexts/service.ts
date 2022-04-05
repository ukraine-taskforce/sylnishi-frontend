export type ID = string;

export enum SERVICE_TYPE {
  EXTERNAL = 'External',
  INTERNAL = 'Internal',
}

export interface Service {
  id: ID;
  category: string;
  type: SERVICE_TYPE;
  path: string;
}
