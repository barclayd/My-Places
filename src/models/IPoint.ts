export interface IPoint {
  lat: number;
  lng: number;
}

export interface ICoords {
  coords(): IPoint;
}
