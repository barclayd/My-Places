import { IPoint, ICoords } from '../models/IPoint';
import * as faker from 'faker';

export default class LocationService implements ICoords {
  public coords() {
    return {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.latitude()),
    } as IPoint;
  }
}
