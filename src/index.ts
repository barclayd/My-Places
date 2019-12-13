import MapService from './services/MapService';
import User from './User';
import Company from './Company';

const users = 5;
const companies = 3;

const mapService = new MapService('map');

Array(users)
  .fill('')
  .forEach(() => {
    const user = new User();
    mapService.displayMarker(
      user.location,
      user.name,
      user.markerContent(),
    );
  });

Array(companies)
  .fill('')
  .forEach(() => {
    const company = new Company();
    mapService.displayMarker(
      company.location,
      company.name,
        company.markerContent(),
    );
  });
