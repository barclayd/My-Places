import { IPoint } from '../models/IPoint';
import Marker = google.maps.Marker;

export default class MapService {
  private zoomLevel = 3;
  private readonly googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: this.zoomLevel,
      center: {
        lat: 0,
        lng: 0,
      } as IPoint,
    });
  }

  public display() {
    return this.googleMap;
  }

  public addMarker(position: IPoint, label: string): Marker {
    return new google.maps.Marker({
      map: this.googleMap,
      position,
      label,
    });
  }
}
