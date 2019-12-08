import User from './User';
import Company from './Company';

const user = new User();
console.log(user.name);
console.log(user.location);
const company = new Company();
console.log(company.location, company.slogan, company.name, company.type);
