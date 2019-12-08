import MapService from './services/MapService';
import User from './User';

const user = new User();

const mapService = new MapService('map');

mapService.display();
mapService.addMarker(user.location, `${user.name}'s location`);
