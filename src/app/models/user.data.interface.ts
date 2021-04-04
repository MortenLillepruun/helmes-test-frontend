import {Sector} from './sector.interface';

export class UserData {
  id: number;
  name: string;
  sectors: Sector[];
  termsAgreement = false;
}
