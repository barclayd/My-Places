import User from '../User';

export default class MapService {
  private zoomLevel = 3;

  constructor(public user: User) {}

  public display() {
    return new google.maps.Map(document.getElementById('map'), {
      zoom: this.zoomLevel,
      center: this.user.location,
    });
  }
}
