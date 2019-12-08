import faker from 'faker';
import { IPoint } from './models/IPoint';

export default class User {
  public name: string;
  public location: IPoint;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}
