import { IPoint } from './IPoint';

export interface IMappable {
  name: string;
  location: IPoint;
  markerContent(): string
}
