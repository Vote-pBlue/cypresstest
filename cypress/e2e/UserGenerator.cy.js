import { faker } from '@faker-js/faker';

describe('Register user and save details', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

it('should register with a details:', () => {

    const randomNum = Math.floor(Math.random() * 10000);
    const randomString = faker.string.alphanumeric(3);
    const username = `${faker.person.firstName()}${faker.person.lastName()}${randomNum}${randomString}`;
    const password = faker.internet.password({ length: 12, special: true });
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        ssn: faker.string.alphanumeric(9), // Social Security Number
        username: username,
        password: password
    };

    const login = {
        username: username,
        password: password
    };

    cy.writeFile(`cypress/fixtures/userlogin/${username}.json`, login);

    cy.get('input.button').contains('Log In').should('exist');
    cy.contains('Register').should('be.visible');
    cy.get('a').contains('Register').click();


    cy.get('input[id="customer.firstName"]').type(user.firstName)
    cy.get('input[id="customer.lastName"]').type(user.lastName)
    cy.get('input[id="customer.address.street"]').type(user.address)
    cy.get('input[id="customer.address.city"]').type(user.address)
    cy.get('input[id="customer.address.state"]').type(user.address)
    cy.get('input[id="customer.address.zipCode"]').type(user.address)
    cy.get('input[id="customer.phoneNumber"]').type(user.phoneNumber)
    cy.get('input[id="customer.ssn"]').type(user.ssn)
    cy.get('input[id="customer.username"]').type(username)
    cy.get('input[id="customer.password"]').type(user.password)
    cy.get('input[id="repeatedPassword"]').type(user.password)

    cy.get('input.button').contains('Register').click()

    cy.contains('Log Out').should('be.visible')
    cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')

    cy.get('a').contains('Log Out').click()

    });

});
