export type ID = string;

export enum SERVICE_TYPE {
  EXTERNAL = 'External',
  SUPPLIES = 'supplies',
  CHAT = 'chat',
  INTERNAL = 'Internal',
}

export interface Service {
  id: ID;
  name: string;
  type: SERVICE_TYPE;
  path: string;
}
