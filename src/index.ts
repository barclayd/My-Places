import MapService from './services/MapService';
import User from './User';
import Company from './Company';

const users = 5;
const companies = 3;

const mapService = new MapService('map');

Array(users)
  .fill('')
  .forEach(() => {
    mapService.displayMarker(new User());
  });

Array(companies)
  .fill('')
  .forEach(() => {
    mapService.displayMarker(new Company());
  });
