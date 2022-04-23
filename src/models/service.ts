export type ID = string;

export enum ServiceType {
  EXTERNAL = 'External',
  INTERNAL = 'Internal',
}

export interface Service {
  id: ID;
  category: string;
  type: ServiceType;
  path: string;
}
