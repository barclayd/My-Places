import MapService from './services/MapServicee';
import User from './User';

const user = new User();

const mapService = new MapService(user);

mapService.display();
