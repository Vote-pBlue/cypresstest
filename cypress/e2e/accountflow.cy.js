//Visit the homepage
//Confirm using incorrect credentials displays an error
//Follow the reset password flow
//Login
//Navigate to "Open New Account"
//Submit the form to open an account
//Assert that:
//The UI confirms the account was opened

describe('Account Flow Tests', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
});

    it('should show login error', () => {

        cy.get('input.button').contains('Log In').should('exist');
        cy.contains('Log In').should('be.visible');
        cy.get('input.button').contains('Log In').click();
        cy.get('h1').contains('Error').should('be.visible');

    });

    it('should reset password, open new account, UI confirms new account, network request for new account returns successful response', () => {
        
        cy.get('input.button').contains('Log In').should('exist');
        cy.contains('Forgot login info?').should('be.visible');
        cy.get('a').contains('Forgot login info?').click();
        cy.get('input.button').contains('Find My Login Info').should('be.visible');
        cy.task('getUserFiles').then((userFiles) => {
            const randomFile = userFiles[Math.floor(Math.random() * userFiles.length)];
            cy.log(`Using user file: ${randomFile}`);
            cy.fixture(`userlogin/${randomFile}`).then((user) => {
            cy.get('input[id="firstName"]').type(user.firstName);
            cy.get('input[id="lastName"]').type(user.lastName);
            cy.get('input[id="address.street"]').type(user.address);
            cy.get('input[id="address.city"]').type(user.city);
            cy.get('input[id="address.state"]').type(user.state);
            cy.get('input[id="address.zipCode"]').type(user.zipCode);
            cy.get('input[id="ssn"]').type(user.ssn);
        cy.get('input.button').contains('Find My Login Info').click();
        cy.contains('Your login information was located successfully. You are now logged in.').should('be.visible');
        cy.get('p').contains(user.password).should('be.visible');
        cy.get('p').contains(user.username).should('be.visible');
       

      
        //Navigate to "Open New Account"
        cy.get('a').contains('Open New Account').click();
        cy.get('h1').contains('Open New Account').should('be.visible');
        cy.get('select#type').should('exist').select('SAVINGS');
        cy.get('select#fromAccountId').should('exist').select(0);

     

   cy.intercept('POST', '/parabank/services_proxy/bank/createAccount*').as('openAccount');

      });

        cy.get('input.button[value="Open New Account"]').should('be.visible').click();
 

        cy.get('h1').contains('Account Opened!').should('be.visible');
        cy.contains('Congratulations, your account is now open.').should('be.visible');
        cy.wait('@openAccount').its('response.statusCode').should('eq', 200);

    });
});
});
