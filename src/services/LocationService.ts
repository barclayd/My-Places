import { IPoint, ICoords } from '../models/IPoint';
import * as faker from 'faker';

export default class LocationService implements ICoords {
  public coords(): IPoint {
    return {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }
}
