import { FullName } from './full-name.model';
import { Sector } from './sector.model';

export class Booking {
  xStatus: string;
  code: string;
  host?: string;
  traveller?: FullName[];
  total?: [{
    amount: number;
    currency: string;
  }];
  sector?: Sector[];
  customer?: FullName;
}
