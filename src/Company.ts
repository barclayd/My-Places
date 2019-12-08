import * as faker from 'faker';
import { IPoint } from './models/IPoint';
import LocationService from './services/LocationService';

export default class Company {
  public name: string;
  public type: string;
  public slogan: string;
  public location: IPoint;

  constructor() {
    this.name = faker.company.companyName();
    this.type = faker.company.companySuffix();
    this.slogan = faker.company.catchPhrase();
    this.location = new LocationService().coords();
  }
}
