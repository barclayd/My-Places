import * as faker from 'faker';
import { IPoint } from './models/IPoint';
import LocationService from './services/LocationService';
import { IMappable } from './models/IMappable';

export default class Company implements IMappable {
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

  public markerContent(): string {
    return `<div><h1>${this.name} ${this.type}</h1><i>${this.slogan}</i><p>Visit ${this.name}, a trusted ${this.type}, between 9:00 and 17:30 Monday - Friday</p></div>`;
  }
}
