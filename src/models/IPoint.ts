export interface IPoint {
  latitude: number;
  longitude: number;
}

export interface ICoords {
  coords(): IPoint;
}
