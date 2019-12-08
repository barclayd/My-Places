import faker from 'faker';
import { IPoint } from './models/IPoint';
import LocationService from './services/LocationService';

export default class User {
  public name: string;
  public location: IPoint;

  constructor() {
    this.name = faker.name.firstName();
    this.location = new LocationService().coords();
  }
}
