const { describe } = require("mocha");

describe('Register user and save details', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

it('should register with a details: ', () => {

    const rig = require('rig');
    const person = rig.person();
    const randomNum = Math.floor(Math.random() * 10000);
    const username = `${person.firstName}${person.lastName}${randomNum}`;
    const user = {
        firstName: person.firstName,
        lastName: person.lastName,
        address: person.address.street,
        city: person.address.city,
        state: person.address.state,
        zipCode: person.address.zip,
        phoneNumber: rig.phoneNumber(),
        ssn: rig.ssn(), // Social Security Number
        username: username
    };

    cy.writeFile('cypress/fixtures/users/${username}.json', user);

    cy.get('input.button').contains('Log In').should('exist')
    cy.contains('Register').should('be.visible')
    cy.get('a').contains('Register').click()

    
    cy.get('input[id="customer.firstName"]').type(person.firstName)
    cy.get('input[id="customer.lastName"]').type(person.lastName)
    cy.get('input[id="customer.address.street"]').type(person.address.street)
    cy.get('input[id="customer.address.city"]').type(person.address.city)
    cy.get('input[id="customer.address.state"]').type(person.address.state)
    cy.get('input[id="customer.address.zipCode"]').type(person.address.zip)
    cy.get('input[id="customer.phoneNumber"]').type(rig.phoneNumber())
    cy.get('input[id="customer.ssn"]').type(rig.ssn())
    cy.get('input[id="customer.username"]').type(username)


    
    cy.get('input[id="customer.password"]').type('Smartfellow1')
    cy.get('input[id="repeatedPassword"]').type('Smartfellow1')

    cy.get('input.button').contains('Register').click()

    cy.contains('Log Out').should('be.visible')
    cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')

    cy.get('a').contains('Log Out').click()

    cy.get('input.button').contains('Log In').should('exist')
    cy.contains('Register').should('be.visible')

    cy.get('div.input, input[name="username"]').type(`TheSimmonator${randomNum}`)
    cy.get('div.input, input[name="password"]').type('Smartfellow1')
    cy.get('input.button').contains('Log In').click()
    cy.contains('Log Out').should('be.visible')
    cy.get('a').contains('Log Out').click()

    });

});
