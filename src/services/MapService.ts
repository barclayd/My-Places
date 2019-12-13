import { IPoint } from '../models/IPoint';
import Marker = google.maps.Marker;
import Map = google.maps.Map;
import InfoWindow = google.maps.InfoWindow;
import { IMappable } from '../models/IMappable';

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
    this.display();
  }

  private display(): Map {
    return this.googleMap;
  }

  private generateMarker({
    location: position,
    name: label,
  }: IMappable): Marker {
    return new google.maps.Marker({
      map: this.googleMap,
      position,
      label,
    });
  }

  private popupWindow(mappable: IMappable): InfoWindow {
    return new google.maps.InfoWindow({
      content: `<div>${mappable.markerContent()}</div>`,
    });
  }

  private popupWindowListener(popupWindow: InfoWindow, marker: Marker): void {
    google.maps.event.addListener(marker, 'click', () => {
      popupWindow.open(this.googleMap, marker);
    });
  }

  public displayMarker(mappable: IMappable) {
    const marker = this.generateMarker(mappable);
    const popupWindow = this.popupWindow(mappable);
    this.popupWindowListener(popupWindow, marker);
  }
}
