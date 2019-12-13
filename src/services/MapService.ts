import { IPoint } from '../models/IPoint';
import Marker = google.maps.Marker;
import Map = google.maps.Map;
import InfoWindow = google.maps.InfoWindow;

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

  private generateMarker(position: IPoint, label: string): Marker {
    return new google.maps.Marker({
      map: this.googleMap,
      position,
      label,
    });
  }

  private popupWindow(text: string): InfoWindow {
    return new google.maps.InfoWindow({
      content: `<div>${text}</div>`,
    });
  }

  private popupWindowListener(popupWindow: InfoWindow, marker: Marker): void {
    google.maps.event.addListener(marker, 'click', () => {
      popupWindow.open(this.googleMap, marker);
    });
  }

  public displayMarker(position: IPoint, label: string, text: string) {
    const marker = this.generateMarker(position, label);
    const popupWindow = this.popupWindow(text);
    this.popupWindowListener(popupWindow, marker);
  }
}
