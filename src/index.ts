import User from './User';

const user = new User();

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: user.location,
});
