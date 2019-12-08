import MapService from './services/MapService';
import User from './User';
import Company from './Company';

const user = new User();
const company = new Company();

const mapService = new MapService('map');

mapService.display();
mapService.displayMarker(
  user.location,
  user.name,
  `<p>${user.name}'s current location</p>`,
);
mapService.displayMarker(
  company.location,
  company.name,
  `<h1>${company.name} ${company.type}</h1><i>${company.slogan}</i>`,
);
