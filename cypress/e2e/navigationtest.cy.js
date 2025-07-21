describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

    it('should list all left menu items', () => {
        cy.get('ul.leftmenu').find('a:contains("About Us")').should('have.attr', 'href');
        cy.get('ul.leftmenu').find('a:contains("Services")').should('have.attr', 'href');
        cy.get('ul.leftmenu').find('a:contains("Products")').should('have.attr', 'href');
        cy.get('ul.leftmenu').find('a:contains("Locations")').should('have.attr', 'href');
        cy.get('ul.leftmenu').find('a:contains("Admin")').should('have.attr', 'href');
      });

    it('should list all footer menu items', () => {
        cy.get('#footerPanel').find('a:contains("Home")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("About Us")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Services")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Products")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Locations")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Forum")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Site Map")').should('have.attr', 'href');
        cy.get('#footerPanel').find('a:contains("Contact Us")').should('have.attr', 'href');
      });

      it('homepage button should navigate to the homepage', () => {
        cy.get('li.home').click();
        cy.url().should('include', 'parabank/index.htm');
      })

      it('about us button should navigate to a valid page', () => {
        cy.get('li.aboutus').click();
        cy.url().should('include', 'parabank/about.htm');
        cy.get('h1').should('contain', 'ParaSoft Demo Website');
      })
  
      it('contact button should navigate to a valid page', () => {
        cy.get('li.contact').click();
        cy.url().should('include', 'parabank/contact.htm');
        cy.get('h1').should('contain', 'Customer Care');
      })

    });
