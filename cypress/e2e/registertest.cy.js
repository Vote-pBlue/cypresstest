describe('Register Test', () => {
  beforeEach(() => {
    // Visit the registration page before each test
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })


  it('should load the registration page' , () => {
    // Check that the page contains the "Register" link
    
    cy.get('input.button').contains('Log In').should('exist')
    cy.contains('Register').should('be.visible')

    }
    )

it('should register with a details: ', () => {

    cy.get('input.button').contains('Log In').should('exist')
    cy.contains('Register').should('be.visible')
    cy.get('a').contains('Register').click()

    const randomPhone = Math.floor(Math.random() * 1000000000);
    const randomSSN = Math.floor(Math.random() * 1000000);
    const randomUN = Math.floor(Math.random() * 1000000);
    
    cy.get('input[id="customer.firstName"]').type('Simmon')
    cy.get('input[id="customer.lastName"]').type('Sellow')
    cy.get('input[id="customer.address.street"]').type('1 Infinite Ave.')
    cy.get('input[id="customer.address.city"]').type('Salt Lake City')
    cy.get('input[id="customer.address.state"]').type('Utah')
    cy.get('input[id="customer.address.zipCode"]').type('84101')
    cy.get('input[id="customer.phoneNumber"]').type(`07${randomPhone}`)
    cy.get('input[id="customer.ssn"]').type(`AB${randomSSN}$A`)
    cy.get('input[id="customer.username"]').type(`TheSimmonator${randomUN}`)
    cy.get('input[id="customer.password"]').type('Smartfellow1')
    cy.get('input[id="repeatedPassword"]').type('Smartfellow1')

    cy.get('input.button').contains('Register').click()

    cy.contains('Log Out').should('be.visible')
    cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')

    cy.get('a').contains('Log Out').click()

    cy.get('input.button').contains('Log In').should('exist')
    cy.contains('Register').should('be.visible')

    cy.get('div.input, input[name="username"]').type(`TheSimmonator${randomUN}`)
    cy.get('div.input, input[name="password"]').type('Smartfellow1')
    cy.get('input.button').contains('Log In').click()
    cy.contains('Log Out').should('be.visible')
    cy.get('a').contains('Log Out').click()

})

})
