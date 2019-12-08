import MapService from './services/MapService';
import User from './User';
import Company from './Company';

const users = 5;
const comapnies = 3;

const mapService = new MapService('map');

Array(users)
  .fill('')
  .forEach(() => {
    const user = new User();
    mapService.displayMarker(
      user.location,
      user.name,
      `<p>${user.name}'s current location</p>`,
    );
  });

Array(comapnies)
  .fill('')
  .forEach(() => {
    const company = new Company();
    mapService.displayMarker(
      company.location,
      company.name,
      `<h1>${company.name} ${company.type}</h1><i>${company.slogan}</i>`,
    );
  });
