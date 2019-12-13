import faker from 'faker';
import { IPoint } from './models/IPoint';
import LocationService from './services/LocationService';
import { IMappable } from './models/IMappable';

export default class User implements IMappable {
  public name: string;
  public location: IPoint;

  constructor() {
    this.name = faker.name.firstName();
    this.location = new LocationService().coords();
  }

  public markerContent(): string {
    return `<h2>${this.name}</h2>`;
  }
}
