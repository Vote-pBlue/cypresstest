import { faker } from '@faker-js/faker';
import {userData} from '../fixtures/testdata.js';

describe('Register user and save details', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

it('should register with a details:', () => {

  function registerUser() {

    const randomNum = Math.floor(Math.random() * 10000);
    const randomString = faker.string.alphanumeric(3);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = `${firstName}${lastName}${randomNum}${randomString}`;
    const password = faker.internet.password({ length: 12, special: true });
    const user = {
        firstName: firstName,
        lastName: lastName,
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        ssn: faker.string.alphanumeric(9), // Social Security Number
        username: username,
        password: password
    };

    cy.get('input.button').contains('Log In').should('exist');
    cy.contains('Register').should('be.visible');
    cy.get('a').contains('Register').click();

    Object.values(userData).forEach(field => {
    cy.get(`input[id="${field.input}"]`).type(user[field.type]);
    });

    cy.get('input.button').contains('Register').click();

    cy.get('body').then($body => {
        if ($body.text().includes('This username already exists.')) {
          cy.log('Username exists, retrying registration...');
          registerUser(); // Recursively try again with a new user
        } else {
          cy.writeFile(`cypress/fixtures/userlogin/${username}.json`, user);
          cy.contains('Log Out').should('be.visible');
          cy.contains('Your account was created successfully. You are now logged in.').should('be.visible');
          cy.get('a').contains('Log Out').click();
        }
      });
    } 

 registerUser();
  });
});
