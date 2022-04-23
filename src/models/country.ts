import { ID, Service } from './service';

export interface Country {
  id: ID;
  name: string;
  services: Service[];
}
